var john = {
    base: [124, 48, 268, 180, 42],
    tipCalc: function () {
        this.tips = []
        this.finalValues = []
        for (let i = 0; i < this.base.length; i++){
            if (this.base[i] < 50){
                this.tips.push(this.base[i] * 0.2)
            } else if (this.base[i] < 200 && this.base[i] >= 50){
                this.tips.push(this.base[i] * 0.15)
            } else if (this.base[i] > 200){
                this.tips.push(this.base[i] * 0.1)
            }
            this.finalValues[i] = this.base[i] + this.tips[i]
        }
        return ["John's Final Bills: " + this.finalValues, "John's Tips: " + this.tips]
    }
}

var mark = {
    base: [77, 375, 110, 45],
    tipCalc: function(){
        this.tips = []
        this.finalValues = []
        for (let i = 0; i < this.base.length; i++){
            if (this.base[i] < 100){
                this.tips.push(this.base[i] * 0.2)
            } else if (this.base[i] < 300 && this.base[i] >= 100){
                this.tips.push(this.base[i] * 0.1)
            } else if (this.base[i] > 300){
                this.tips.push(this.base[i] * 0.25)
            }
            this.finalValues[i] = this.base[i] + this.tips[i]
        }
        return ["Marks's Final Bills: " + this.finalValues, "Mark's Tips: " + this.tips]
    }
}

function tipAvg (array) {
    var average = 0;
    for (let i = 0; i < array.length; i ++){
        average = (average + array[i] / (array.length - 1))
    }
    return average
}

console.log("John tips", john.tipCalc())
console.log("Mark tips", mark.tipCalc())
console.log("John Tip Average", tipAvg(john.tips))
console.log("Mark Tip Average", tipAvg(mark.tips))

if (tipAvg(john.tips) > tipAvg(mark.tips)){
    console.log("John paid more in tips")
} else {
    console.log("Mark paid more in tips")
}
