chrome.contextMenus.create({
    title: "偽中国語",
    contexts: ["selection"],
    onclick: function (info) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {text: "report_back", selectedText: info.selectionText});
        });
    }
});