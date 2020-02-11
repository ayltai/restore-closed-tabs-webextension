'use strict';

document.addEventListener('DOMContentLoaded', () => chrome.storage.local.get({
    maxResults : 10,
}, preferences => {
    document.getElementById('maxResults').value = preferences.maxResults;
}));

document.getElementById('save').addEventListener('click', () => {
    const maxResults = Number(document.getElementById('maxResults').value) || 10;

    chrome.storage.local.set({
        maxResults : Math.min(chrome.sessions.MAX_SESSION_RESULTS, Math.max(2, maxResults)),
    }, () => {
        const node = document.getElementById('message');
        node.textContent = 'Settings saved';

        window.setTimeout(() => node.textContent = '', 1500);
    });
});
