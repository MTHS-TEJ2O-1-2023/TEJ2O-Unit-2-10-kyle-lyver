/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023
 * This program makes neopixels light up according to the light level
*/

// variables
let lightvalue: number = 0
let neopixelStrip: neopixel.Strip = null

// screen setup
basic.clearScreen()
lightvalue = input.lightLevel()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // check if <= 51 light level
  lightvalue = input.lightLevel()
  if (lightvalue <= 51) {
  basic.showNumber(0)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  }

  // check if >= 52 light level
  if (lightvalue >= 52) {
  basic.showNumber(1)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
  }

  // 
  if (lightvalue >= 104) {
    basic.showNumber(2)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
  }

  // 
  if (lightvalue >= 156) {
    basic.showNumber(3)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
  }

  //
  if (lightvalue >= 208) {
    basic.showNumber(4)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
  }
})

// 
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showIcon(IconNames.Happy)
})
