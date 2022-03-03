let abstand = 0
basic.forever(function () {
    abstand = 100
    if (input.buttonIsPressed(Button.A)) {
        abstand += grove.measureInCentimeters(DigitalPin.C16)
        if (abstand < 30) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.showNumber(abstand)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
