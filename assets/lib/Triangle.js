
// Global variable referencing the Shape constructor
const { Shape } = require("../lib/Shape");


// Circle constructor linked to the Shape constructor
class Triangle extends Shape{
    constructor(shapeColor, logoColor, logoText){
        super ("Triangle", shapeColor, logoColor, logoText)
    }


// Template literal function for formatting SVG elements
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text></svg>`
    }
}
// Export Circle constructor 
module.exports = Triangle;