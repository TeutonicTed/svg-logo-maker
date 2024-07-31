
// Global Shape Constructor variables
const Circle = require("./Circle") 
const Square = require("./Square") 
const Triangle = require("./Triangle") 

// JEST tests for all three shape constructor classes
describe ("Test of my SVG shape constructor functions - (Circle, Triangle, Square)", () => {
    it("should construct a new Circle, based on user input", () => {
        const shape = new Circle("red","green","xyz");
        shape.colorShape("red"); 
        shape.colorText("green");
        shape.spellText("xyz");
        expect(shape.render()).toEqual(
 `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">xyz</text></svg>`)
    }),

    it("should construct a new Triangle, based on user input", () => {
        const shape = new Triangle("blue","black","liv")
        shape.colorShape("blue") 
        shape.colorText("black") 
        shape.spellText("liv")
        expect(shape.render()).toEqual(
 `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">liv</text></svg>`)
    }),

    it("should construct a new Square, based on user input", () => {
        const shape = new Square("purple","yellow","rts");
        shape.colorShape("purple") 
        shape.colorText("yellow") 
        shape.spellText("rts")
        expect(shape.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="purple" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">rts</text></svg>`)
    })

});