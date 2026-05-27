const generateBtn = document.getElementById('generate-btn');
const expression = "0123456789ABCDEF";
const palettes = document.querySelectorAll('.palette');
const paletteBlocks = document.querySelectorAll('.palette-block');
const colorCodes = document.querySelectorAll('.color-code');
let code = "#";

document.addEventListener("DOMContentLoaded", generateCode);


function generateCode(){
    palettes.forEach((palette, CodeIndex) => {
        for(let i=0; i<6; i++){
            let index = Math.floor(Math.random() * expression.length);
            code += expression[index];
        }
        palette.style.backgroundColor = code;
        colorCodes[CodeIndex].textContent = code;
        code = "#";
    })
}
