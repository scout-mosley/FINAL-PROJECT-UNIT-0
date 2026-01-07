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
    pins.digitalWritePin(DigitalPin.P0, 1)
    InputA=InputA+1
} else {
    pins.digitalWritePin(DigitalPin.P0, 0)
    InputA=InputA-1
}
   
})


// B button on off
input.onButtonPressed(Button.B, function () {
    if (InputB == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        InputB = InputB + 1
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        InputB = InputB - 1
    }

})  

// A+B button on off
input.onButtonPressed(Button.AB, function () {
    if (InputAB == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)

        InputAB = InputAB + 1
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)

        InputAB = InputAB - 1
    }

})
    
    if (InputA == 1, InputB == 0) {
        basic.showString("A-1 B-0")
    } 
    if (InputA == 0, InputB == 1) {
        basic.showString("A-0 B-1")
    if (InputAB == 1) {
}
}

