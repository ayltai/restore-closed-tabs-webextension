import chrome from 'sinon-chrome/webextensions';

import { getPreferences, getRecentlyClosedTabs, } from './Utils';

window.chrome = chrome;

describe('Utils', () => {
    it('getPreferences', () => {
        getPreferences({}, jest.fn());

        expect(window.chrome.storage.sync.get.calledOnce).toBeTruthy();
    });

    it('getRecentlyClosedTabs', () => {
        getRecentlyClosedTabs(0, jest.fn(), (props, callback) => callback(props));

        expect(window.chrome.sessions.getRecentlyClosed.calledOnce).toBeTruthy();
    });
});
