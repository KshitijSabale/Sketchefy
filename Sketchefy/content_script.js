if (document.querySelector("div.editor-wrapper__1ru6").innerText === "") {
    document.querySelectorAll("span.title__3f2k")[2].click();
    document.querySelectorAll("span.title__3f2k")[0].click();
} else {
    document.querySelector("div.editor-wrapper__1ru6").innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sketchefy</title>
    </head>
    <body>
    <iframe src="https://sketchpad.pro/C54BE013FEE90A6C9EE:wkg4pff5" width="1000" height="700"></iframe>
    </body>
    </html>`;
}