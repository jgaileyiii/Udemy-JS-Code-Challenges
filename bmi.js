/* Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/


const mark = {
    fullName: "Mark Miller",
    mass: 110,
    height: 1.19,
    calcBmi: function(){
        this.bmi = this.mass / this.height^2;
        return this.bmi
    }
}

const john = {
    fullName: "John Smith",
    mass: 200,
    height: 1.69,
    calcBmi: function(){
        this.bmi = this.mass / this.height^2;
        return this.bmi
    }
}

function highestBMI (){
    if (john.calcBmi() > mark.calcBmi()){
        return john.fullName + " has the higher BMI at " + john.bmi
    } else {
        return mark.fullName + " has the higher BMI at " + mark.bmi
    }
}

console.log(highestBMI())

var stuff = [1,2,3,4,5]
console.log(typeof stuff)

function reverse () {
    var newStuff = [];
    for (let i = stuff.length - 1; i >= 0; i - 1){
        newStuff[i] = stuff[i] 
    }
    return newStuff
}

console.log('reverse', reverse())