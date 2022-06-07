// functionality 
const functionDatabase = {
    sum: function(a,b){
        return addition = a + b;
    },
    subtract: function(a,b) {
       return subtract = a - b;
    },
    multiply: function(a,b) {
        return multiply = a * b;
    },
    divide: function(a,b) {
        if (a == 0 || b == 0){
            return 'not by zero!'

        }
        return division = a/b;
    }
}


let input = '';
let memory; 
let operation;
let displayOperations = '';

const number = document.querySelectorAll('.numeric');
const dot = document.querySelector('#dot');

for (let i = 0; i < number.length; i++) {

    number[i].addEventListener('click', function(e){
        input = input + this.value;
        
        if (isDecimal(input)){
            dot.disabled = true;
        } else {
            dot.disabled = false;
        }
        displayOperations = displayOperations + this.value;
        updateDisplay();
    })
}

const functional = document.querySelectorAll('.functional')

for (let i = 0; i < functional.length; i++) {

    functional[i].addEventListener('click', function(e){
        console.log(this.value)

        if (this.value == 'backspace'){
            displayOperations = displayOperations.slice(0,(displayOperations.length - input.length));
            input = '';
            updateDisplay();

        } else if (this.value == 'C') {
            input = '';
            memory = '';
            displayOperations = '';
          updateDisplay();
        } else if (input && !memory) {
            operation = this.id;
            memory = input;
            input = '';
            displayOperations += this.value;
            updateDisplay();
        } else if (memory && input) {
        computing();
        operation = this.id;
        displayOperations += this.value;
        updateDisplay();
    }})
}

const equality = document.querySelector('#equal');

function computing(){ 
    let calculation = functionDatabase[`${operation}`](Number(memory),Number(input));
    memory = calculation;
    input = '';
    updateDisplay();
    return memory;
    }

equality.addEventListener('click', computing)



//display connection

const display = document.querySelector('.screen');
const inputDisplay = document.createElement('p');
const memoryDisplay = document.createElement('p');
memoryDisplay.textContent = memory;
memoryDisplay.setAttribute('id', 'memory'); 

inputDisplay.textContent = input;
inputDisplay.setAttribute('id', 'insert');

display.appendChild(memoryDisplay);
display.appendChild(inputDisplay);

const buttons = document.querySelectorAll('button');

function updateDisplay(){
    memoryDisplay.textContent = displayOperations;
    inputDisplay.textContent = memory; 
}


function isDecimal(num){
    if (Number(num)%1 != 0) {
        return true;
    }
}





//Keyboard connection 
// const body = document.querySelector('body');

// body.addEventListener('keypress',function(e){
//     let key = document.querySelector(`[data-key='${e.keyCode}']`);
//     key.classList.add('pressed');
//     function remover(){
//         key.classList.remove('pressed')
//     }
//     setTimeout(remover, 300);

//     console.log(Array.from(key.classList).includes('numeric'))
//     if (Array.from(key.classList).includes('numeric')){
//     input = input + key.value;
//         updateDisplay();
//     } else if (Array.from(key.classList).includes('functional')) {
//         if (this.value == 'C') {
//             input = '';
//             memory = '';
//           updateDisplay();
//         } else if (memory != 0 && input == '') {
//             operation = this.id;
//         }
//          else {
//         operation = this.id;
//         memory = Number(input);
//         input = '';
//         updateDisplay();
//         }
//     }


// })








