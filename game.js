spriteAnimations = [
    "idle" = {
        loc: [
            { x: 0, y: 0 },
            { x: 575, y: 0 },
            { x: 1150, y: 0 },
            { x: 1725, y: 0 },
            { x: 2300, y: 0 },
            { x: 2875, y: 0 }
        ]
    },
    "jump" = {
        loc: []
    },
    "run" = {
        loc: []
    }
];

console.log(spriteAnimations["idle"].loc[2].x); //1150;
console.log(spriteAnimations["idle"].loc.length); //7