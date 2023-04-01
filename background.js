chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        console.log('Tab %d URL changed to %s', tabId, changeInfo.url);
        chrome.tabs.sendMessage(tabId, { action: "urlChanged", url: changeInfo.url });
    }
});