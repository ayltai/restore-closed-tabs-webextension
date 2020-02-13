import browser from 'sinon-chrome/webextensions';

import { getPreferences, getRecentlyClosedTabs, } from './Utils';

window.browser = browser;

describe('Utils', () => {
    it('getPreferences', () => {
        getPreferences({}, jest.fn());

        expect(browser.storage.sync.get.calledOnce).toBeTruthy();
    });

    it('getRecentlyClosedTabs', () => {
        getRecentlyClosedTabs(0, jest.fn(), (props, callback) => callback(props));

        expect(window.browser.sessions.getRecentlyClosed.calledOnce).toBeTruthy();
    });
});
