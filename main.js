// Function to get all the buttons that correspond to numbers.
function numberButtons() {
    // Get all the buttons inside the page.
    let buttons = document.querySelectorAll('button');
    // Get the the visor
    let lowerVisor = document.querySelector(".lowerVisor");
    
    for (let i=0, l=buttons.length; i<l; i++) {
        /* Use isNaN to verify if the text content of the button is not a number, and negate that 
        so I only get the numbers. */
        if (!isNaN(buttons[i].firstChild.nodeValue)) {
            // Event listener that adds to the visor the number pressed.
            buttons[i].addEventListener("click", () => {
                // An if statement for when I'm typing all numbers but zero.
                if(buttons[i].firstChild.nodeValue != 0) {
                    /* Ternary operator that verifies if the visor only has a zero, and if it does, replaces it with the pressed number. 
                    If it already has numbers it will just keep adding pressed numbers */
                    lowerVisor.textContent == 0 ? lowerVisor.textContent = buttons[i].firstChild.nodeValue : lowerVisor.textContent += buttons[i].firstChild.nodeValue; 
                // An if statement for when I'm pressing zero and the visor isn't empty.
                } else if(buttons[i].firstChild.nodeValue == 0 && lowerVisor.textContent != 0) {
                    // Just adds pressed zeros to the content already on the visor.
                    lowerVisor.textContent += 0;
                } else {
                    // This runs when the visor only has a zero, in this situation the visor will only have a zero.
                    lowerVisor.textContent = 0;
                }
            });
        }
    }  
}
numberButtons();

// Clears lower visor.
function clearVisor() {
    let lowerVisor = document.querySelector(".lowerVisor");
    let clearButton = document.querySelector(".clearButton");

    clearButton.addEventListener("click", () => {
        lowerVisor.textContent = 0;
    });

}
clearVisor();

// Clears all visors.
function clearAllVisors() {
    let upperVisor = document.querySelector(".upperVisor");
    let lowerVisor = document.querySelector(".lowerVisor");
    let allClearButton = document.querySelector(".allClearButton");
    
    allClearButton.addEventListener("click", () => {
        lowerVisor.textContent = 0;
        upperVisor.textContent = 0;
    });

}
clearAllVisors();

function sumOp() {
    let upperVisor = document.querySelector(".upperVisor");
    let lowerVisor = document.querySelector(".lowerVisor");
    let sumButton = document.querySelector(".sumButton");

    sumButton.addEventListener("click", () => {
        if(upperVisor.textContent == 0) {
            upperVisor.textContent = lowerVisor.textContent;
            lowerVisor.textContent = " + ";
        } else {
            upperVisor.textContent += lowerVisor.textContent;
            lowerVisor.textContent = " + ";
        }
    });
}

sumOp();