var socket = io('/');
socket.on('report', function (data) {
    console.log(data);
    var str = JSON.stringify(data['csp-report']);
    var container = document.getElementById('container');
    var div = document.createElement('div');
    div.innerHTML = htmlspecialchars(str);
    container.appendChild(div);
});

function htmlspecialchars(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    return str;
}
