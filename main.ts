/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: jan 2026
 * This program works as a half adder
*/

// VARIABLES
let ButtonB = 1

// A buttonon
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)

})

// B button on
 
while (true) {
    input.onButtonPressed(Button.A, function () {
        if (ButtonB > 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {

        }
    })
    }

    
   


// A+B button on
input.onButtonPressed(Button.AB, function() {
    pins.digitalWritePin(DigitalPin.P0, 1)

})
