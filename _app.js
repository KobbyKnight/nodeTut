/*    Importing   */
// const tutorial = require('./tutorial');
// console.log(tutorial.sum(1,2));
// console.log(tutorial.PI);
// console.log(new tutorial.something());

// import event emmiter for node
const EvEm = require('events');
const ee = new EvEm();
ee.on('tutorial',()=>{
    console.log('event Emitted');
});
// trigger the event
ee.emit('tutorial');

// event with params
ee.on('sum',(num1,num2)=>console.log(num1+num2));
// trigger
ee.emit('sum',1,2);

// trigger events on custom objects 
class Person extends EvEm{
    constructor(name){
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let p = new Person('Pedro');
let i = new Person('I');
p.on('name',()=>console.log('my name is '+p.name));
i.on('name',()=>console.log('my name is '+i.name));
i.emit('name');
p.emit('name');

//lodash example
const _ = require('lodash');
let ex = _.fill([1,2,3,4,5],"banana",1,4);
console.log(ex);