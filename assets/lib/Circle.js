
// Global variable referencing the Shape constructor
const { Shape } = require("../lib/Shape");


// Circle constructor linked to the Shape constructor
class Circle extends Shape{
    constructor(shapeColor, logoColor, logoText){
        super ("circle", shapeColor, logoColor, logoText)
    }
  
// Template literal function for formatting SVG elements
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text></svg>`
    }
}

// Export Circle constructor 
module.exports = Circle;