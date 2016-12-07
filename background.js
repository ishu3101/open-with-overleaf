/** Open the given url in the new tab */
function open_new_tab(url){
    chrome.tabs.create({ url: url });
}

chrome.contextMenus.create({
    id: 'overleaf',
    title: 'Open with Overleaf',
    contexts: ['link'],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "overleaf") {
        var linkUrl = info.linkUrl;
		//https://www.overleaf.com/docs?snip_uri=http://pathtoyourfile.tex&splash=none
		linkUrl = 'https://www.overleaf.com/docs?snip_uri=' + linkUrl +'&splash=none';
		open_new_tab(linkUrl);
    }
});
