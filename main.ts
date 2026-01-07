/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: jan 2026
 * This program works as a half adder
*/

// VARIABLES
let InputB = 0
let InputA = 0
let InputAB = 0

// A button on off
    input.onButtonPressed(Button.A, function () {
if (InputA==0) {
    pins.digitalWritePin(DigitalPin.P5, 1)
    InputA=InputA+1
} else {
    pins.digitalWritePin(DigitalPin.P5, 0)
    InputA=InputA-1
}
   
})


// B button on off
input.onButtonPressed(Button.B, function () {
    if (InputB == 0) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        InputB = InputB + 1
    } else {
        pins.digitalWritePin(DigitalPin.P11, 0)
        InputB = InputB - 1
    }

})  

// A+B button on off
input.onButtonPressed(Button.AB, function () {
    if (InputAB == 0) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P11, 1)

        InputAB = InputAB + 1
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)

        InputAB = InputAB - 1
    }

})
