
// const person = {
//     firstName: "victor",
//     lastName: "ojedeji",
//     age: 00,
//     hobbies: ["coding", "learning"],
//     address: {
//         street: "no 33, street",
//         city: "ibadan",
//         state: "oyo"
//     }
// }

/*
const todos = [
    {
        id: 1,
        text: "meeting with boss",
        isCompleted: false
    },

    {
        id: 2,
        text: "party all night",
        isCompleted: true
    },
    
    {
        id: 3,
        text: "dentist appt.",
        isCompleted: true
    }
];*/

/*
for ( let identity of todos) {
    console.log(identity .id)
}*/



//forEach, map, filter
/*
// todos.forEach(function(todos){
    console.log(todos.text  )
});
*/
/*
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
*/
/*
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);*/
/*
const x = 20

if ( x === 10) {
    console.log("x is 10")
} else if (x > 21) { 
    console.log("x is greater thank 10")
} else {
    console.log("x is lesser than 10")
}*/




// //ES5
// //constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }


// //Instantiate objects
// const person1 = new Person ("john", "Doe", "4-3-1980");
// const person2 = new Person ("Mary", "Smith", "3-6-1970");

// console.log(person1.getBirthYear());
// console.log(person1.getFullName()); 

// console.log(person2.getFullName())
// console.log(person1);


/*
//basics of object oriented programming
//ES6
//class

class Person{
    constructor (firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


//Instantiate objects
const person1 = new Person ("john", "Doe", "4-3-1980");
const person2 = new Person ("Mary", "Smith", "3-6-1970"); 

console.log(person2.getFullName())
console.log(person1);
*/

// single element selector

//const form = document.getElementById('my-form'); 
//const myForm = document.querySelector('.container');
//console.log(myForm)


// multiple element selector

// console.log(document.querySelectorAll('.item')); 
// console.log(document.getElementsByClassName('.item'));
// console.log(document.getElementsByTagName('li'));




/*
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));*/


/*
const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red'; */

/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/







const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields!';

    setTimeout(() => msg.remove(), 3000);

    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}