
function makeGreen() {
    const p = document.querySelector('p');
    // console.log("P ----------- ", p);
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}


// Regular
console.log('1 - Regular console:');
console.log('hello');

// Interpolated
console.log('2 - Interpolated:');
console.log('Hello I am a %s string!', '💩');


// Styled
console.log('3 - Styled:');
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.log('4 - warning:');
console.warn('OH NOOO');

// Error :|
console.log('5 - Error:');
console.error('Shit!');

// Info
console.log('6 - Info:');
console.info('Crocodiles eat 3-4 people per year');



// Testing
document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector('p');
    console.log("access p tag : ", p);

    console.log('7 - assert:');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    
    // clearing
    console.log('8 - clearing:');
    console.clear();
    
    // Viewing DOM Elements
    console.log('9 - dir:');
    console.log(p);
    console.dir(p);
    
    console.clear();
});


const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 }
];


// Grouping together
dogs.forEach(dog => {
    console.log('dog object:', dog);
    
    console.log('10 - groupCollapsed:');
    
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});


console.log('11 - counting:');
// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');


// timing
console.log('12 - timing:');
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});



console.log('13 - table:');
console.table(dogs);

