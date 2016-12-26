"use strict";
var $ = require("jquery");
var rxjs_1 = require("rxjs");
var uri = "ws://" + window.location.host + "/ws";
var webSocket = new WebSocket(uri);
webSocket.onopen = function () {
    //$("#spanStatus").text("connected");
    console.log('Hiiiii');
};
webSocket.onmessage = function (evt) {
    $("#spanStatus").text(evt.data);
};
webSocket.onerror = function (evt) {
    alert(evt.message);
};
webSocket.onclose = function () {
    $("#spanStatus").text("disconnected");
};
$("#btnSend").click(function () {
    alert(WebSocket.OPEN);
    if (webSocket.readyState === WebSocket.OPEN) {
        console.log('sent');
        webSocket.send($("#textInput").val());
    }
    else {
        console.log('error');
        $("#spanStatus").text("Connection is closed");
    }
});
var numbers = [1, 5, 10];
var source = rxjs_1.Observable.create(function (observer) {
    var index = 0;
    var produceValue = function () {
        observer.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 2000);
        }
        else {
            observer.complete();
        }
    };
    produceValue();
});
source.subscribe(function (value) { return console.log("value: " + value); }, function (err) { return console.log("error " + err); }, function () { return console.log("complete"); });
//# sourceMappingURL=main.js.map