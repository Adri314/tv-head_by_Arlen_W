info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(8, 152), randint(8, 112))
    info.changeScoreBy(1)
    music.baDing.play()
    mySprite.startEffect(effects.hearts, 500)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.splash("TV head 1", "by Arlen W")
game.splash("help from Adrian", "enjoy")
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`TV`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 
    9 8 f f f f f f f f f f f f 8 9 
    9 8 f 9 9 f f f f f f 9 9 f 8 9 
    9 8 f 9 9 f f f f f f 9 9 f 8 9 
    9 8 f f f f f f f f f f f f 8 9 
    9 8 f f f f 9 f f 9 f f f f 8 9 
    9 8 f f f f f 9 9 f f f f f 8 9 
    9 8 f f f f f f f f f f f f 8 9 
    9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 
    9 9 9 9 9 9 9 6 6 9 9 9 9 9 9 9 
    . . . . 9 6 6 6 6 6 6 9 . . . . 
    . . . . 9 9 9 6 6 9 9 9 . . . . 
    . . . . . 9 6 6 6 6 9 . . . . . 
    . . . . . 9 6 9 9 6 9 . . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    `,img`
    f f f f f f f f f f f f f f f f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    f 8 9 9 9 9 9 9 9 9 9 9 9 9 8 f 
    f 8 9 f f 9 9 9 9 9 9 f f 9 8 f 
    f 8 9 f f 9 9 9 9 9 9 f f 9 8 f 
    f 8 9 9 9 9 9 9 9 9 9 9 9 9 8 f 
    f 8 9 9 9 9 9 9 9 9 9 9 9 9 8 f 
    f 8 9 9 9 9 f 9 9 f 9 9 9 9 8 f 
    f 8 9 9 9 9 9 f f 9 9 9 9 9 8 f 
    f 8 9 9 9 9 9 9 9 9 9 9 9 9 8 f 
    f 8 8 8 8 8 8 6 6 8 8 8 8 8 8 f 
    f f f f f 6 6 6 6 6 6 f f f f f 
    . . . . f f f 6 6 f f f . . . . 
    . . . . . f 6 6 6 6 f . . . . . 
    . . . . . f 6 f f 6 f . . . . . 
    . . . . . f f f f f f . . . . . 
    `],
100,
true
)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
mySprite2 = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(randint(8, 152), randint(8, 112))
info.startCountdown(30)
