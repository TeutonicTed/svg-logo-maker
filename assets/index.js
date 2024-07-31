// Global Require Variables
const { writeFile } = require ('fs');
const { generateSVG } = require ('./questions')
const inquirer = require("inquirer");

// Global Shape Constructor Variables
const { Shape } = require("./lib/Shape");
const Triangle  = require("./lib/Triangle")
const Square  = require("./lib/Square")
const Circle  = require("./lib/Circle")

// SVG generator function
    async function start(){
        const responses = await inquirer.prompt(generateSVG());
        
        let shape 
        if( responses.shape === "Circle" ){
            shape = new Circle(responses.shapeColor, responses.logoColor, responses.logoText)
        }
        if( responses.shape === "Triangle" ){
            shape = new Triangle(responses.shapeColor, responses.logoColor, responses.logoText)
        }
        if( responses.shape === "Square" ){
            shape = new Square(responses.shapeColor, responses.logoColor, responses.logoText)
        }

        writeFile("./examples/logo.svg", shape.render(), ( responses), (err) => {
          if( err ){
            console.error("There was an error writing the file.")
          } else {
            console.log("logo.svg - Successfully Generated!")
          }
        })
    }
 
  
  start()