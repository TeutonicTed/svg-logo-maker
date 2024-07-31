
// Global Shape constructor
class Shape{
    constructor(shapeName, shapeColor, logoColor, logoText){
        this.shapeName = shapeName;
        this.shapeColor = shapeColor;
        this.logoColor = logoColor;
        this.logoText = logoText;
    }

    // Functions used to ship constructor variables to JEST test.
    nameShape(){
        console.log("shape added")
    }
    // colorShape(){
    //     this.shapeColor = this.shapeColor;
    //     console.log("color added")
    // }
    // spellText(){
    //     this.logoText = this.logoText;
    //     console.log("text added")
    // }
    // colorText(){
    //     this.logoColor = this.logoColor
    //     console.log("text color added")
    // }

}

// Export variable to ship Shape variable array 
module.exports = { Shape };