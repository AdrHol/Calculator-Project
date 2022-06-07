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


let input = '';
let memory; 
let operation;

const number = document.querySelectorAll('.numeric')

for (let i = 0; i < number.length; i++) {

    number[i].addEventListener('click', function(e){
        input = input + this.value;
        console.log(input)
    })
}

const functional = document.querySelectorAll('.functional')

for (let i = 0; i < functional.length; i++) {

    functional[i].addEventListener('click', function(e){
        if (this.value == 99) {
            input = '';
            memory = '';
        } else if (memory != 0 && input == '') {
            operation = this.id;
        }
         else {
        operation = this.id;
        memory = Number(input);
        input = '';
        console.log(operation);
        }
    })
}

const equality = document.querySelector('#equal');

function computing(){ 
    let calculation = functionDatabase[`${operation}`](memory,Number(input));
    memory = calculation;
    input = '';
    return memory;
    }

equality.addEventListener('click', computing)
