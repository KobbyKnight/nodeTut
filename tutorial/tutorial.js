// exporting a module
const sum = (num1,num2) => num1+num2;
const PI = 3.14;
class something{
    constructor(){
        console.log('class');
    }
}
module.exports = {sum:sum, PI:PI, something:something};