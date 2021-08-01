function calculate(inputs) {
    const operators = ['+', '-', '*', '/']
    let nums = []
    let operator = ''
    
    for (let i = 0; i < inputs.length; i++){
    if (inputs[i] === null) {
        nums.push(0) 
        
    }else if(operators.includes(inputs[i])){
        operator = inputs[i] 
        
    }else if(inputs[i] !== '' && inputs[i] !== undefined && !isNaN(inputs[i])) {
        nums.push(inputs[i])
        
    }
      
}
    if (operator.length !== 1 || nums.length !== 2) return NaN



switch (operator) {
    case '+':
        return nums[0] + nums[1]
        break
    case '-':
        return nums[0] - nums[1]
        break
    case '*':
        return nums[0] * nums[1]
        break
    case '/':
        return nums[0] / nums[1]



    }
}
module.exports = calculate