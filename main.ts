/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: jan 2026
 * This program works as a half adder
*/

// startup
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P9, 0)
basic.showIcon(IconNames.Yes)

while (true) {
    // A pressed
    if (input.buttonIsPressed(Button.A) == true) {
        basic.showString("A")
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        basic.showString("")
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }

    // B pressed
    if (input.buttonIsPressed(Button.B) == true) {
        basic.showString("B")
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else {
        basic.showString("")
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
}
