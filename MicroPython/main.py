"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

num_pixels = 12
np = neopixel.NeoPixel(pin16, 4)
light_Level = number = 0

while True:
    display.clear()
    np[0] = (0, 0, 0)
    np[1] = (0, 0, 0)
    np[2] = (0, 0, 0)
    np[3] = (0, 0, 0)
    np.show()
    display.show(Image.HAPPY)
    if button_a.is_pressed():
        if input.
