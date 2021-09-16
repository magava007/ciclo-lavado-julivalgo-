input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        . # . . #
        `)
    basic.pause(13000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(7000)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # # # .
        # . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.pause(9000)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.pause(6000)
    basic.clearScreen()
})
