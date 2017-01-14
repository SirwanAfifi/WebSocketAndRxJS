import * as $ from "jquery";
import { Observable, Observer } from "rxjs";

let webSocket;

$().ready(() => {

    webSocket = new WebSocket("ws://localhost:6396");

    webSocket.onopen = () => {
        $('#spanStatus').val('conncted');
    };

    webSocket.onmessage = (data) => {
        $("#data").append("<p>" + data.data + "</p>");
    };

    webSocket.onclose = () => {
        $("#spanStatus").text("disconnected");
    };

    $("#btnSend").click(() => {
        if (webSocket.readyState === WebSocket.OPEN) {
            webSocket.send($("#textInput").val());
            $("#textInput").val("");
            $("#textInput").focus();
        }
        else {
            $("status").text("Connection is closed");
        }
    });

});