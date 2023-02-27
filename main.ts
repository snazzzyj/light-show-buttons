let strip: neopixel.Strip = null
let sound_to_colour = 0
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
input.onSound(DetectedSound.Loud, function () {
    strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    sound_to_colour = Math.map(input.soundLevel(), 0, 187, 0, 280)
    strip.showColor(neopixel.hsl(sound_to_colour, 255, 20))
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
