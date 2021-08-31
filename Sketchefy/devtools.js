console.log("devtools.js");
chrome.devtools.panels.create("Sketchefy",
    "icon16.png",
    "popup.html",
    () => {
        chrome.storage.sync.get(['iframe'], function (result) {
            console.log(result);
            console.log(result.iframe);
            document.body.innerHTML = result.iframe;
        });
    });