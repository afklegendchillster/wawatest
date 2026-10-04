scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass3`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level10`)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f f 1 f f f f 1 f f . . . . . 
        `, SpriteKind.Enemy)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(81, 105)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f f 1 f f f f 1 f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f f 1 f f f f 1 f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f f 1 1 1 1 1 1 f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f 1 f f f 1 f f 1 . . . . . 
        . f f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f 1 1 1 1 1 1 1 f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f 1 1 . . . . . . . . . . . 
        . f f 1 1 f f 1 . . . . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f f . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f 1 f f f 1 f f 1 . . . . . 
        . f f f f f f f f f 1 . . . . . 
        . f f f f f f f f f 1 . . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f 1 1 1 1 1 1 1 f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 f f 1 . . . . . . . . 
        . . f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 1 f 1 1 f f f . . . . 
        . f 1 1 1 1 f 1 1 1 f f . . . . 
        . 1 f 1 1 1 f 1 1 f 1 f . . . . 
        . f f f f 1 f f f 1 1 . . . . . 
        . f f f f 1 f f f 1 1 . . . . . 
        . f f f f f f f f f 1 f . . . . 
        . f 1 1 1 1 1 1 1 1 1 f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f 1 1 f f 1 1 . . . . . . . 
        . f f 1 1 1 f 1 1 f . . . . . . 
        . f 1 1 1 1 f 1 1 1 f f . . . . 
        . 1 f 1 1 1 f 1 1 f 1 f . . . . 
        . f f f f 1 f f f 1 1 . . . . . 
        . f f f f 1 f f f 1 1 . . . . . 
        . f f f f f f f f f 1 f f . . . 
        f 1 1 1 1 1 1 1 1 1 1 1 f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 f f 1 1 . . . . . . . 
        . . . . 1 1 f 1 1 1 . . . . . . 
        . . . 1 1 1 f 1 1 1 f . . . . . 
        . 1 f 1 1 1 f 1 1 1 1 . . . . . 
        . f f 1 f 1 1 1 f 1 1 . . . . . 
        . f 1 1 f 1 1 1 f 1 1 1 . . . . 
        . f 1 f f f 1 f 1 1 1 1 f . . . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . f 1 . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . 1 f 1 1 1 1 1 1 1 1 . . . . . 
        . f f 1 f 1 1 1 f 1 1 . . . . . 
        f f 1 1 f 1 1 1 f 1 1 1 f f . . 
        f f 1 f f f 1 f 1 1 1 1 1 f f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f 1 f 1 1 1 1 1 1 . . . . . . . 
        f f f 1 f 1 1 1 f 1 1 f f f f . 
        f f 1 1 1 1 1 1 f 1 1 1 f f f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f 1 f 1 1 1 f . . . . . . . 
        f f 1 1 1 1 1 1 f 1 1 1 . . . . 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . 1 1 . f 1 1 1 . . . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 . . . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    mySprite.sayText("You Saved Meeee!!!:D")
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 1 1 1 1 1 1 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `],
    500,
    false
    )
    controller.moveSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`floorLight4`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(80, 89)
    controller.moveSprite(mySprite)
    mySprite.sayText("Find Somewhere That Is Bright!!!")
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f f 1 f f f f 1 f f . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(80, 98)
    myEnemy.follow(mySprite, 87)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath5`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level6`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(29, 51)
    controller.moveSprite(mySprite)
    mySprite.sayText("Find Somewhere That Is Bright!!!")
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f f 1 f f f f 1 f f . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(10, 51)
    myEnemy.follow(mySprite, 87)
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    game.setGameOverMessage(true, "THANKS FOR PLAYING!!!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e e 1 e e e e e 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e 1 e e e e e 1 e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f e e e e e e e e e e f . . 
        . f f e e e e e e e e e e f . . 
        . f f e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 1 1 1 1 e e e f . . 
        . f e e 1 e e e e e 1 e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f e e e e e e e e e e f . . 
        . f f e 1 1 e e e e e e e f . . 
        . f f e 1 1 e e e 1 e e e f . . 
        . f f 1 1 1 e e e 1 e e e f . . 
        . f f f e e e e e e e e e f . . 
        . f f f e e e e e e e e e f . . 
        . f f f e e e e e e e e e f . . 
        . f f f e 1 1 1 1 1 e e e f . . 
        . f f f 1 e e e e e 1 e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f e e e e e f f . . 
        . f f f f 1 f e e 1 1 e f f . . 
        . f f f 1 1 f e e 1 1 e f f . . 
        . f f 1 1 1 f e e 1 e e f f . . 
        . f 1 f f f f e e e e e f f . . 
        . f f f e e e e e e e e f f . . 
        . f f f e e e e e e e e f f . . 
        . f f f e 1 1 1 1 1 f f f f . . 
        . f f f 1 e e e e f 1 f f f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f 1 f f f 1 f f f f . . 
        . f f f 1 1 f f f 1 1 e f f . . 
        . f f 1 1 1 f f f 1 1 1 f f . . 
        . f 1 f f f f f f f f f f f . . 
        . f f f f f f f f e e e f f . . 
        . f f f f f f f f e e e f f . . 
        . f f f f 1 1 1 1 1 f f f f . . 
        . f f f 1 e e e e f 1 f f f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f 1 f f f 1 f f f f . . 
        . f f f 1 1 f f f 1 1 f f f . . 
        . f f 1 1 1 f f f 1 1 1 f f . . 
        . f 1 f f f f f f f f f 1 f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . f f f f 1 1 1 1 1 f f f f . . 
        . f f f 1 f f f f f 1 f f f . . 
        . f f f f f f f f f f f f f . . 
        `],
    500,
    false
    )
    pause(4000)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    music.stopAllSounds()
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    music.play(music.createSong(hex`0078000408030500001c00010a006400f401640000040000000000000000000000000005000004480000000400011804000800011808000c00011e1000140001201400180001221c002000012024002800011e2c003000011b31003500011d37003c0001203d004000011e42004500011901001c000f05001202c102c20100040500280000006400280003140006020004480000000300011804000800011808000c00011e1000140001201400180001221c002000012024002800011e2c003000011b31003500011d37003c0001203d004000011e42004500011903001c0001dc00690000045e0100040000000000000000000005640001040003480000000300011804000800011808000c00011e1000140001201400180001221c002000012024002800011e2c003000011b31003500011d37003c0001203d004000011e42004500011905001c000f0a006400f4010a0000040000000000000000000000000000000002480000000300011804000800011808000c00011e1000140001201400180001221c002000012024002800011e2c003000011b31003500011d37003c0001203d004000011e42004500011906001c00010a006400f401640000040000000000000000000000000000000002480000000300011804000800011808000c00011e1000140001201400180001221c002000012024002800011e2c003000011b31003500011d37003c0001203d004000011e420045000119`), music.PlaybackMode.UntilDone)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(81, 97)
    controller.moveSprite(mySprite)
    mySprite.sayText("Were Friends Now:3")
    tiles.setCurrentTilemap(tilemap`level11`)
    info.startCountdown(8)
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.setGameOverMessage(false, "You'll Get It Next Time!")
    game.gameOver(false)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadIntersection1, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    mySprite.setPosition(83, 98)
    controller.moveSprite(mySprite)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f f 1 1 f f 1 1 f f . . . . . 
        . f 1 1 1 f f 1 1 1 f . . . . . 
        . 1 f f f f f f f f 1 . . . . . 
        . f f f f f f f f f f . . . . . 
        . f f f 1 1 1 1 f f f . . . . . 
        . f f 1 f f f f 1 f f . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(83, 115)
    myEnemy.follow(mySprite, 79)
})
let mySprite: Sprite = null
let myEnemy: Sprite = null
music.play(music.createSong(hex`0078000408030105001c000f0a006400f4010a00000400000000000000000000000000000000024e0000000200012504000600012408000a0001250c000e0001241400160001201b001d00011e22002400011929002b00012030003200011d35003700011e4300450001204a004c00011d4f005100011e`), music.PlaybackMode.LoopingInBackground)
game.showLongText("Bob The Chocolate Bar And The Corruption Of Bad Emotions", DialogLayout.Center)
music.stopAllSounds()
music.play(music.createSong(hex`0078000408120700001c00010a006400f4016400000400000000000000000000000000050000044800ba01be010124bf01c4010124c401c9010127ca01cf010124d001d5010124d601da01012cda01de010129de01e3010127e301e4010122e501e6010122e701e8010122e901f001012002001c000c960064006d019001000478002c010000640032000000000a060005480060006400012468006c00012474007800012480008400012488008c000124940098000124a000a4000124a800ac000124b400b8000124c000c4000124c800cc000124d400d800012404001c00100500640000041e000004000000000000000000000000000a0400048a004c015c0101246001680101276801700101257001780101227801800101258001880101248b019501012295019e010124a101a8010120a901b0010122b101b901011dba01bf010124bf01c4010124c401c9010127ca01cf010124d001d5010124d601da01012cda01de010129de01e3010127e301e4010122e501e6010122e701e8010122e901f001012005001c000f0a006400f4010a00000400000000000000000000000000000000028a004c015c0101246001680101276801700101257001780101227801800101258001880101248b019501012295019e010124a101a8010120a901b0010122b101b901011dba01be010124bf01c4010124c401c9010127ca01cf010124d001d5010124d601da01012cda01de010129de01e3010127e301e4010122e501e6010122e701e8010122e901f001012006001c00010a006400f401640000040000000000000000000000000000000002cc00e000f0000124f400fc000127fc000401012504010c0101220c011401012514011c0101241f012901012229013201012435013c0101203d014401012245014c01011d4c015c0101246001680101276801700101257001780101227801800101258001880101248b019501012295019e010124a101a8010120a901b0010122b101b901011dba01be010124bf01c4010124c401c9010127ca01cf010124d001d5010124d601da01012cda01de010129de01e3010127e301e4010122e501e6010122e701e8010122e901f001012007001c00020a006400f4016400000400000000000000000000000000000000034800a000a2000124a200a4000124a800aa000124aa00ac000124b400b6000124b600b8000124c000c2000124c200c4000124c800ca000124ca00cc000124d400d6000124d600d800012408001c000e050046006603320000040a002d0000006400140001320002010002020100000400012408000c00012414001800012420002400012428002c00012434003800012440004400012448004c00012454005800012460006400012468006c00012474007800012480008400012488008c000124940098000124a000a4000124a800ac000124b400b8000124c000c4000124c800cc000124d400d8000124e000f0000124f400fc000127fc000401012504010c0101220c011401012514011c0101241f012901012229013201012435013c0101203d014401012245014c01011d4c015c0101246001680101276801700101257001780101227801800101258001880101248b019501012295019e010124a101a8010120a901b0010122b101b901011d`), music.PlaybackMode.InBackground)
tiles.setCurrentTilemap(tilemap`level4`)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f . . . . . 
    . f f f f f f f f f f . . . . . 
    . f f f f f f f f f f . . . . . 
    . f f 1 1 f f 1 1 f f . . . . . 
    . f f 1 1 f f 1 1 f f . . . . . 
    . f 1 1 1 f f 1 1 1 f . . . . . 
    . 1 f f f f f f f f 1 . . . . . 
    . f f f f f f f f f f . . . . . 
    . f f f 1 1 1 1 f f f . . . . . 
    . f f 1 f f f f 1 f f . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setPosition(15, 82)
if (true) {
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f . f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f f . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f . f f f f f . . . . 
        . . . f f f f f f f . f . . . . 
        . . f f f f f f f f f f . . . . 
        . . f f . f f f . f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . f f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f . f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f 1 f f f f f f . . . . . 
        . . f f 1 f f f 1 f f . . . . . 
        . . f f f f . f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f . f f f f f f . . . . . 
        . . f f 1 f 1 1 f f f . . . . . 
        . . f 1 f f f f f 1 f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f . f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f 1 f f f 1 f f . . . . . 
        . . f f 1 f f f 1 f f . . . . . 
        . . f f 1 f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f 1 1 1 1 f f f . . . . . 
        . . f 1 f f f f f 1 f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f . f f . f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 f 1 f f f 1 f 1 f . . . . 
        . f f f 1 f f f 1 f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . . f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 f 1 f f f 1 f 1 f . . . . 
        . f f f 1 f f f 1 f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 f f f f f f f 1 f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 f 1 f f f 1 f 1 f . . . . 
        . f f f 1 f f f 1 f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 f f f f f f f 1 f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 f 1 f f f 1 f 1 f . . . . 
        . f f f 1 f f f 1 f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f 1 . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 f f f f f f f 1 f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f 1 . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 1 1 f f f 1 1 1 f . . . . 
        . 1 f f f f f f f f f 1 . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f f 1 1 f f f 1 1 f f . . . . 
        . f 1 1 1 f f f 1 1 1 f . . . . 
        . 1 f f f f f f f f f 1 . . . . 
        . f f f f f f f f f f f . . . . 
        . f f f 1 1 1 1 1 f f f . . . . 
        . f f 1 f f f f f 1 f f . . . . 
        `],
    900,
    false
    )
}
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f . . 
    . f e e e e e e e e e e e f . . 
    . f e e e 1 e e e 1 e e e f . . 
    . f e e e 1 e e e 1 e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f e e e e e e e e e e e f . . 
    . f e 1 e e e e e e e 1 e f . . 
    . f e 1 1 e e e e e 1 1 e f . . 
    . f e e 1 1 1 1 1 1 1 e e f . . 
    . f e e e e e e e e e e e f . . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
mySprite.setPosition(64, 82)
pause(14134)
mySprite.sayText("Find Somewhere That Is Bright!!!")
myEnemy.follow(mySprite, 87)
light.setBrightness(20)
info.setLife(1)
controller.moveSprite(mySprite)
mySprite.setBounceOnWall(false)
let spritemovement = 1
if (spritemovement == 1) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e 1 e e e e e e e 1 e f . . . 
        f e 1 1 e e e e e 1 1 e f . . . 
        f e e 1 1 1 1 1 1 1 e e f . . . 
        f e e e e e e e e e e e f . . . 
        f f f f f f f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e 1 e e e e e e e 1 e f . . . 
        f e 1 1 e e e e e 1 1 e f . . . 
        f e e 1 1 1 1 1 1 1 e e f . . . 
        f e e e e e e e e e e e f . . . 
        f f f f f f f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e 1 e e e e e e e 1 e f . . . 
        f e 1 1 e e e e e 1 1 e f . . . 
        f e e 1 1 1 1 1 1 1 e e f . . . 
        f e e e e e e e e e e e f . . . 
        f f f f f f f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e 1 e e e 1 e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f e 1 e e e e e e e 1 e f . . 
        . f e 1 1 e e e e e 1 1 e f . . 
        . f e e 1 1 1 1 1 1 1 e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e 1 e e e 1 e e e f . . . 
        f e e e e e e e e e e e f . . . 
        f e 1 e e e e e e e 1 e f . . . 
        f e 1 1 e e e e e 1 1 e f . . . 
        f e e 1 1 1 1 1 1 1 e e f . . . 
        f e e e e e e e e e e e f . . . 
        f f f f f f f f f f f f f . . . 
        `],
    500,
    true
    )
}
if (spritemovement == 0) {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
}
if (info.life() == 0) {
    mySprite.startEffect(effects.spray)
}
