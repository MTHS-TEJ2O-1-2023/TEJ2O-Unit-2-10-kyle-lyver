"""
Created by: Kyle Lyver
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

num_pixels = 12
np = neopixel.NeoPixel(pin16, 4)
amount_of_light = 0

while True:
    display.clear()
    np[0] = (0, 0, 0)
    np[1] = (0, 0, 0)
    np[2] = (0, 0, 0)
    np[3] = (0, 0, 0)
    np.show()
    display.show(Image.HAPPY)
    if button_a.is_pressed():
        if amount_of_light <= 51:
            np[0] = (0, 0, 0)
            np.show()
            display.scroll("0")
        if amount_of_light >= 52:
            np[0] = (128, 0, 128)
            np.show()
            display.scroll("1")
        if amount_of_light >= 104:
            np[0] = (128, 0, 128)
            np[1] = (128, 0, 128)
            np.show()
            display.scroll("2")
        if amount_of_light >= 156:
            np[0] = (128, 0, 128)
            np[1] = (128, 0, 128)
            np[2] = (128, 0, 128)
            np.show()
            display.scroll("3")
        if amount_of_light >= 204:
            np[0] = (128, 0, 128)
            np[1] = (128, 0, 128)
            np[2] = (128, 0, 128)
            np[3] = (128, 0, 128)
            np.show()
            display.scroll("4")
    if button_b.is_pressed():
        np[0] = (0, 0, 0)
        np[1] = (0, 0, 0)
        np[2] = (0, 0, 0)
        np[3] = (0, 0, 0)
        display.clear
