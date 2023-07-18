chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.text === "report_back") {
            const filteredText = filterText(request.selectedText);
        }
    }
);

function filterText(text) {
    const japaneseFiltered = text.replace(/[ぁ-んァ-ン]/g, "");
    highlightedText(japaneseFiltered);
    return japaneseFiltered;
}

function highlightedText(text){
    // ユーザーが選択したテキストのNodeを取得できるようにします。
    let selection = window.getSelection();
    let selectedNode = selection.focusNode.parentNode;

    // 新しいノードの内容
    let newNodeContent = `<div style='background-color: lightgray'>${text}</div>`;
    
    // insertAdjacentHTMLを使用して新しいdivを追加する
   selectedNode.insertAdjacentHTML('afterend', newNodeContent);
}