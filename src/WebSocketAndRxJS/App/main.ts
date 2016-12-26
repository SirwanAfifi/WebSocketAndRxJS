import * as $ from "jquery";
import { Observable, Observer } from "rxjs";

var uri = "ws://" + window.location.host + "/ws";
var webSocket = new WebSocket(uri);
webSocket.onopen = () => {
    //$("#spanStatus").text("connected");
    console.log('Hiiiii');
};

webSocket.onmessage = evt => {
    $("#spanStatus").text(evt.data);
};
webSocket.onerror = evt => {
    alert(evt.message);
};
webSocket.onclose = () => {
    $("#spanStatus").text("disconnected");
};


$("#btnSend").click(() => {

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


let numbers = [1, 5, 10];
let source = Observable.create(observer => {

    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 2000);

        } else {
            observer.complete();
        }

    };

    produceValue();
});

source.subscribe(
    value => console.log(`value: ${value}`),
    err => console.log(`error ${err}`),
    () => console.log("complete")
);