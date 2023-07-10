const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [{
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
}, {
    name: 'color',
    message: 'Enter a background color:'
}, {
    type: 'input',
    name: 'logoColor',
    message: 'Enter the color for the text:',
},
{
    type: 'input',
    name: 'logoText',
    message: 'Enter the text for the logo (up to 3 characters):',
    validate: (value) => {
        if (value.length <= 3) {
            return true;
        }
        else
            return 'Logo text should be up to 3 characters long.';
    },
}
]

// Prompt the user to select a shape
inquirer.prompt(questions)
    .then(({ shape, color, logoColor, logoText }) => {

        let svg
        switch (shape) {
            case 'Circle':
                svg = new Circle()
                break;
            case 'Triangle':
                svg = new Triangle()
                break;
            default:
                svg = new Square()
        };
svg.setColor(color);
      

        // Save the SVG document to a file
        fs.writeFile("./logo.svg", svg.render(), ()=> {
            
        })
    })

