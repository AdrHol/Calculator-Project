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
        return division = a/b;
    }
}


let memory;
let insert;




//display connection

const display = document.querySelector('.screen');
const insertDisplay = document.createElement('p');
const memoryDisplay = document.createElement('p');
memoryDisplay.textContent = memory;
memoryDisplay.setAttribute('id', 'memory');

insertDisplay.textContent = '_';
insertDisplay.setAttribute('id', 'insert');

display.appendChild(memoryDisplay);
display.appendChild(insertDisplay);

const buttons = document.querySelectorAll('button');

function updateOutput(){
    if (insertDisplay.textContent == '_'){
        insertDisplay.textContent = this.value;
    } else if (this.value == 'C'){
        insertDisplay.textContent = '_';
    }
    else {
        insertDisplay.textContent += this.value;
    }
}

buttons.forEach(function(button){
    button.addEventListener('click',updateOutput);
})

//Keyboard connection 
const body = document.querySelector('body');

body.addEventListener('keypress',function(e){
    let key = document.querySelector(`[data-key='${e.keyCode}']`);
    key.classList.add('pressed');
    function remover(){
        key.classList.remove('pressed')
    }
    setTimeout(remover, 300);

    console.log(e.key)
    
    if (insertDisplay.textContent == '_'){
        insertDisplay.textContent = e.key;
    } else if (e.key == 'c'){
        insertDisplay.textContent = '_';
    }
    else {
        insertDisplay.textContent += e.key;
    };
})










