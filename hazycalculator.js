const operators = ['+', '-', '*', '/']

function calculate(Inputs) {
    for (let i = 0; i < Inputs.length; i++)
         
   Inputs = Inputs.map(Inputs => {
    if (Inputs === null) {
      return 0
    }
    else {
      return Inputs
    }

})

}

switch () {
    case 'add':
        value = num1 + num2
        break
    case 'subtract':
        value = num1 - num2
        break
    case 'multiply':
        value = num1 * num2
        break
    case 'divide':
        value = num1 / num2



}



module.exports = calculate