import { createMuiTheme, Divider, List, ThemeProvider, useMediaQuery, } from '@material-ui/core';
import { ClearAll, OpenInNew, Settings, } from '@material-ui/icons';
import React from 'react';

import { MAX_RESULTS } from './Config';
import { Entry } from './Entry';
import { getRecentlyClosedTabs } from './Utils';
const isFirefox  = navigator.userAgent.indexOf('Firefox') !== -1;

export const App = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(() => createMuiTheme({
        palette : {
            type : isDarkMode ? 'dark' : 'light',
        },
    }), [ isDarkMode, ]);

    const [ items, setItems ] = React.useState([]);

    getRecentlyClosedTabs(MAX_RESULTS, tabs => setItems(tabs));

    return (
        <ThemeProvider theme={theme}>
            <List dense>
                {items.length ? (
                    items.map(item => (
                        <Entry
                            key={item.sessionId}
                            icon={isFirefox ? item.favIconUrl : `chrome://favicon/${item.url}`}
                            title={item.title || 'Untitled'}
                            clickable
                            onClick={() => {
                                window.browser.sessions.restore(item.sessionId);

                                window.close();
                            }} />
                    ))
                ) : (
                    <Entry
                        title='(No recently closed tabs)'
                        clickable={false} />
                )}
            </List>
            <Divider variant='middle' />
            <List>
                <Entry
                    icon={<OpenInNew color='inherit' />}
                    title='Open all in tabs'
                    clickable={Boolean(items.length)}
                    onClick={() => {
                        if (items.length) items.forEach(item => window.browser.sessions.restore(item.sessionId));

                        window.close();
                    }} />
                <Entry
                    icon={<ClearAll color='inherit' />}
                    title='Clear history'
                    clickable={Boolean(items.length)}
                    onClick={() => {
                        window.browser.browsingData.remove({}, {
                            history : true,
                        }, () => window.close());
                    }} />
                <Entry
                    icon={<Settings color='inherit' />}
                    title='Settings'
                    clickable
                    onClick={() => {
                        window.browser.runtime.openOptionsPage();

                        window.close();
                    }} />
            </List>
        </ThemeProvider>
    );
};
