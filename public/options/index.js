'use strict';

const MAX_RESULTS      = 10;
const MESSAGE_DURATION = 1500;

document.addEventListener('DOMContentLoaded', () => browser.storage.sync.get({
    maxResults : MAX_RESULTS,
}, preferences => {
    document.getElementById('maxResults').value = preferences.maxResults;
}));

document.getElementById('save').addEventListener('click', () => {
    const maxResults = Number(document.getElementById('maxResults').value) || MAX_RESULTS;

    browser.storage.sync.set({
        maxResults : Math.min(browser.sessions.MAX_SESSION_RESULTS, Math.max(2, maxResults)),
    }, () => {
        const message = document.getElementById('message');
        message.textContent = 'Settings saved';

        window.setTimeout(() => message.textContent = '', MESSAGE_DURATION);
    });
});
