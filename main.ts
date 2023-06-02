function final () {
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(puntos)
    basic.pause(500)
    basic.clearScreen()
}
function trafico () {
    x = randint(1, 3)
    y = 0
    while (y <= 0) {
        carretera()
        led.plot(x, y)
        basic.pause(espera)
        led.unplot(x, y)
        y = y + 1
    }
}
function carretera () {
    led.toggle(0, 0)
    led.toggle(4, 0)
    led.toggle(0, 1)
    led.toggle(4, 1)
    led.toggle(0, 2)
    led.toggle(4, 2)
    led.toggle(0, 3)
    led.toggle(4, 3)
    led.toggle(0, 4)
    led.toggle(4, 4)
}
function inicio () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
    led.plot(coche, 4)
}
input.onButtonPressed(Button.AB, function () {
    puntos = 0
    espera = 400
    coche = 2
    juega = true
    inicio()
    while (juega) {
        trafico()
        esquivar()
    }
    final()
})
function esquivar () {
	
}
let coche = 0
let espera = 0
let y = 0
let x = 0
let puntos = 0
let juega = false
juega = false
basic.forever(function () {
	
})
