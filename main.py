def on_button_pressed_a():
    global Multi, Money, Cost, CostHandler, MultiHandler
    if Money > Cost:
        Multi += 1
        Money = 0
        Cost += CostHandler
    if Multi == MultiHandler:
        CostHandler += 50
        MultiHandler += 10
input.on_button_pressed(Button.A, on_button_pressed_a)

Money = 0
MultiHandler = 0
CostHandler = 0
Cost = 0
Multi = 0
OLED.init(128, 64)
Multi = 1
Cost = 100
CostHandler = 50
MultiHandler = 10

def on_every_interval():
    global Money
    Money += Multi
loops.every_interval(1000, on_every_interval)

def on_every_interval2():
    OLED.clear()
    OLED.write_string_new_line("Money")
    OLED.write_num_new_line(Money)
    OLED.new_line()
    OLED.write_string_new_line("Cost")
    OLED.write_num_new_line(Cost)
    OLED.new_line()
    OLED.write_string_new_line("Controls: (A) Upgrade")
loops.every_interval(1000, on_every_interval2)
