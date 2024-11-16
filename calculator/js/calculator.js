
function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return (num1 * num2);
}

function divide(num1, num2) 
{
    if (num2 === 0) {
        return "Error"; 
    }
    return (num1 / num2);
}

function bracket(num1, num2)
{
    
     return (-num1);
}

function percentage(num1, num2)
{
    return ((num1/100) * num2);
}


function operate(operator, num1, num2) {
    switch (operator) {

        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "+/-": 
             return bracket(num1, num2);
        case "%":
            return  percentage(num1,num2);    
        default:
            return null;
    }
}


const display = document.getElementById("display");
const AC = document.getElementById("AC");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

let currentValue = "";
let number1 = "";
let number2 = "";
let operator = "";

// Display Result on the Screen
function displayResult(value) 
{
    display.textContent = value;
}
//Backspace handling
document.addEventListener("keydown", (event)=>{
if(event.key === "Backspace")
    {
        
        currentValue = currentValue.slice(0,-1);
        if(currentValue !== "")
        {
        displayResult(currentValue);
        }
        else
        {
            displayResult("0");
        }

    }

})

// Reset Entries
AC.addEventListener("click", () => {
    currentValue = "";
    number1 = "";
    number2 = "";
    operator = "";
    displayResult("0");
});

let decimalusage = false;
// When number 0-9 is clicked
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        if (button.value === "." && currentValue.includes(".")) {
            
            return;
        }
        if(currentValue === "0" && button.value !== '.')
        {
            currentValue = button.value;
        } else 
        {
            currentValue += button.value;       
        }
        displayResult(currentValue);
    
    });

});

// Operator button functionality
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.value === "=")
             {

            if (number1 && currentValue && operator) {
                number2 = currentValue;
                
                const result = operate(operator, parseFloat(number1), parseFloat(number2));
                displayResult(Math.round(result));

                number1 = result; 
                number2 = "";
                operator = "";
                currentValue = "";
              
                
            }
        }
         else {

            if (currentValue === "") return; 

            if (number1 === "") {

                number1 = currentValue;
               
            } else if (number2 === "")
                 {

                number2 = currentValue;
            }

           
            operator = button.value;
            displayResult(operator);
            currentValue = "";
        
    }
    });
});
