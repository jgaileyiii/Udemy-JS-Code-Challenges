const bills = [124, 48, 268];


function tipAmount(bill) {
    if (bill < 50){
        return bill * 0.2
    } else if (bill >= 50 && bill < 200){
        return bill * 0.15
    } else if (bill > 200){
        return bill * 0.1
    }
}

const tips = [tipAmount(bills[0]), tipAmount(bills[1]), tipAmount(bills[2])]
const finalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(finalBills)