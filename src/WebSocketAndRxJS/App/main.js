"use strict";
var $ = require("jquery");
var webSocket;
$().ready(function () {
    webSocket = new WebSocket("ws://localhost:5000");
    webSocket.onopen = function () {
        console.log('conncted');
    };
    webSocket.onmessage = function () {
    };
    webSocket.onclose = function () {
    };
});
//# sourceMappingURL=main.js.map