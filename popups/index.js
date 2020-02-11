'use strict';

const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;

document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => chrome.storage.local.get({
        maxResults : 10,
    }, preferences => {
        chrome.sessions.getRecentlyClosed({
            maxResults : preferences.maxResults,
        }, sessions => {
            const node = document.querySelector('li');
    
            if (sessions.length) {
                node.remove();
            } else {
                document.querySelector('[data-cmd="open-all-tabs"]').dataset.disabled = true;
                document.querySelector('[data-cmd="clear-history"]').dataset.disabled = true;
            }
    
            const history = [];
    
            sessions.slice(0, preferences.maxResults).forEach(session => {
                if (session.tab) history.push({
                     tab : session.tab,
                });
    
                if (session.window) session.window.tabs.forEach(tab => history.push({
                    tab,
                    window : session.window,
                }));
            });
    
            history.forEach(history => {
                const item = node.cloneNode(true);
                item.title             = item.textContent = history.tab.title || 'Untitled';
                item.dataset.sessionId = history.tab.sessionId;
                item.dataset.url       = history.tab.url;

                if (history.tab.favIconUrl) item.style['background-image'] = isFirefox ? `url(${history.tab.favIconUrl})` : `url(chrome://favicon/${history.tab.url})`;
            
                document.querySelector('ul').appendChild(item);
    
                if (history.window) item.querySelector('div').dataset.sessionId = history.window.sessionId;
            });
        });
    }), 100);
});

document.addEventListener('click', ({ target }) => {
    const sessionIds = [];

    if (target.dataset.cmd === 'open-all-tabs') {
        document.querySelectorAll('li').forEach(item => {
            if (item.dataset && item.dataset.sessionId) sessionIds.push(item.dataset.sessionId);
        });
    } else if (target.dataset.cmd === 'clear-history') {
        chrome.browsingData.remove({}, {
            history : true,
        }, () => window.close());
    } else if (target.dataset.sessionId && !target.dataset.disabled) {
        sessionIds.push(target.dataset.sessionId);
    }

    if (sessionIds.length) sessionIds.forEach(sessionId => chrome.sessions.restore(sessionId));
});
