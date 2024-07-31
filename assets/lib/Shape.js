
// Global Shape constructor
class Shape{
    constructor(shapeName, shapeColor, logoColor, logoText){
        this.shapeName = shapeName;
        this.shapeColor = shapeColor;
        this.logoColor = logoColor;
        this.logoText = logoText;
    }

}

// Export variable to ship Shape variable array 
module.exports = { Shape };