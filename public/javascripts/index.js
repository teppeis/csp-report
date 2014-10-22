var socket = io('http://india.dev.cybozu.co.jp/');
socket.on('report', function (data) {
    console.log(data);
    var str = JSON.stringify(data);
    var container = document.getElementById('container');
    var div = document.createElement('div');
    // TODO: escape
    div.innerHTML = htmlspecialchars(str);
    container.appendChild(div);
});

function htmlspecialchars(str) {
    if (typeof(str) == "string") {
        str = str.replace(/&/g, "&amp;"); /* must do &amp; first */
        str = str.replace(/"/g, "&quot;");
        str = str.replace(/'/g, "&#039;");
        str = str.replace(/</g, "&lt;");
        str = str.replace(/>/g, "&gt;");
    }
    return str;
}
