console.log("background.js");
// chrome.action.onClicked.addListener(function (tab) {
//     console.log("entered");
//     if (tab.url.match("https://leetcode.com/problems/*")) {
//         console.log("done");
//         chrome.scripting.executeScript({
//             target: {
//                 tabId: tab.id
//             },
//             files: ['content_script.js'],
//         });
//     }
// });

// chrome.runtime.onInstalled.addListener(function() {
//     chrome.tabs.create({
//         url: "https://sketchpad.pro/advanced.html"
//     }, function(tab) {
//        chrome.runtime.sendMessage({content: tab.id, type:'urlDe'});
//     });
//   });
// });