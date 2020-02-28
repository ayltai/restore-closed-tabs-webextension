export const getPreferences = (defaultValues, callback) => {
    window.chrome.storage.sync.get(defaultValues, preferences => callback(preferences));
};

export const getRecentlyClosedTabs = (limit, callback, getPrefs = getPreferences) => {
    getPrefs({
        maxResults : limit,
    }, preferences => {
        window.chrome.sessions.getRecentlyClosed({
            maxResults : preferences.maxResults,
        }, sessions => {
            const tabs = [];

            sessions.slice(0, preferences.maxResults).forEach(session => {
                if (session.tab) {
                    tabs.push(session.tab);
                } else if (session.window) {
                    session.window.tabs.forEach(tab => tabs.push(tab));
                }
            });

            callback(tabs);
        });
    });
};
