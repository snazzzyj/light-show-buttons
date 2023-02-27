let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    for (let index = 0; index < 50; index++) {
        strip.rotate(1)
        basic.pause(100)
        strip.show()
    }
})
input.onButtonPressed(Button.B, function () {
    strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip.showColor(neopixel.hsl(0, 50, 10))
    strip.show()
})
input.onGesture(Gesture.Shake, function () {
    strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    for (let index = 0; index < 50; index++) {
        strip.rotate(1)
        strip.show()
    }
})
