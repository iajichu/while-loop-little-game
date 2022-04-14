input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    game2 = true
    enemy_sprite = game.createSprite(randint(0, 4), 0)
    while (game2 == true) {
        for (let index = 0; index < 4; index++) {
            enemy_sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        if (sprite.isTouching(enemy_sprite)) {
            game.addScore(1)
            enemy_sprite.delete()
            enemy_sprite = game.createSprite(randint(0, 4), 0)
        } else {
            enemy_sprite.delete()
            game.gameOver()
            game2 = false
            if (game2 == false) {
                sprite = game.createSprite(2, 4)
            }
        }
    }
})
let enemy_sprite: game.LedSprite = null
let game2 = false
let sprite: game.LedSprite = null
game.setScore(0)
sprite = game.createSprite(2, 4)
basic.forever(function () {
	
})
