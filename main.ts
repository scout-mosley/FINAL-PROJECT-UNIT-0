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

input.onButtonPressed(Button.A, function() {
    // 0+0
    basic.showString("0+0=00")
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(1250)

    // 0+1
    basic.showString("0+1=01")
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1250)

    //1+0
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(500)
    basic.showString("1+0=01")
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(1250)

    //1+1
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    basic.showString("1+1=10")
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1250)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
