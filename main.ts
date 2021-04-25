controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.hearts, randint(100, 600))
    mySprite.say("I heart you mush")
    mySprite.x += randint(-10, 20)
})
let mySprite: Sprite = null
scene.setBackgroundColor(10)
game.splash("I'm so excited and I just can't hide it")
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f c c c c f f . . . 
    . f f c c c c c c f f . . 
    f f c c c c c c c c f f . 
    f f c c f c c c c c c f . 
    f f f f f c c c f c c f . 
    f f f f c c c f c c f f . 
    f f f 5 f f f f f f 5 f . 
    f f f f 5 f f f f 5 f f . 
    . f f f f 5 5 5 5 f f . . 
    . f f f f 5 5 5 5 f f . . 
    f e f f f f f f f f e f . 
    e 4 f 7 7 7 7 7 7 c 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(36, 34)
