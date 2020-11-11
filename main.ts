input.onButtonPressed(Button.A, function () {
    radio.sendString("hi my name is Alexander I am from china, shanghai.i love the micro:bit and 3D printing and technology!  bye see you next time!!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
