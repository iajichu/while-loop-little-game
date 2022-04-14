def on_button_pressed_a():
    sprite.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    sprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global game2, enemy_sprite
    game2 = True
    enemy_sprite = game.create_sprite(randint(0, 4), 0)
    while game2 == True:
        for index in range(4):
            enemy_sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(150)
        enemy_sprite.delete()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

enemy_sprite: game.LedSprite = None
game2 = False
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 4)

def on_forever():
    global game2, enemy_sprite
    if sprite.is_touching(enemy_sprite):
        game2 = True
        enemy_sprite = game.create_sprite(randint(0, 4), 0)
basic.forever(on_forever)
