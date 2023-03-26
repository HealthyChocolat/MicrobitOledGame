input.onButtonPressed(Button.A, function () {
    if (Money >= Cost) {
        Multi += 1
        Money = Money - Cost
        Cost += CostHandler
    }
    if (Multi == MultiHandler) {
        CostHandler += 50
        MultiHandler += 5
    }
})
input.onButtonPressed(Button.AB, function () {
    Entry = "" + Entry + "AB"
})
input.onButtonPressed(Button.B, function () {
    if (Cheat_code == Entry) {
        led.plot(1, 3)
        Money += 10000000
    } else {
        Entry = ""
        basic.clearScreen()
    }
})
let Counter = 0
let Loop = 0
let Money = 0
let Entry = ""
let Cheat_code = ""
let MultiHandler = 0
let CostHandler = 0
let Cost = 0
let Multi = 0
OLED.init(128, 64)
Multi = 1
Cost = 100
CostHandler = 50
MultiHandler = 5
Cheat_code = "ABABAB"
Entry = ""
loops.everyInterval(1000, function () {
    Money += Multi
})
loops.everyInterval(1000, function () {
    Loop += 10
})
loops.everyInterval(1000, function () {
    if (Multi >= 100) {
    	
    } else {
        Counter += 1
    }
})
basic.forever(function () {
    basic.pause(100)
    if (Multi >= 100) {
        basic.pause(1000)
        OLED.clear()
        OLED.writeStringNewLine("The End")
        OLED.newLine()
        OLED.writeStringNewLine("It took you")
        OLED.writeNumNewLine(Counter)
        OLED.writeStringNewLine("Seconds!")
    } else {
        basic.pause(1000)
        OLED.clear()
        OLED.writeStringNewLine("Money")
        OLED.writeNumNewLine(Money)
        OLED.newLine()
        OLED.writeStringNewLine("Cost")
        OLED.writeNumNewLine(Cost)
        OLED.newLine()
        OLED.writeStringNewLine("Multiplier")
        OLED.writeNumNewLine(Multi)
    }
})
