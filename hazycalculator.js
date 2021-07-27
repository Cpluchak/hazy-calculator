const operators = ['+', '-', '*', '/']

function calculate(calculationSteps) {
         
   calculationSteps = calculationSteps.map(calculationStep => {
    if (calculationStep === null) {
      return 0
    }
    else {
      return calculationStep
    }

})

}

module.exports = calculate