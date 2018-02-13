module.exports = function (a, b, o) {
    let result = 0
    let output = {
        input : {
            a : a,
            b : b,
        },
        operator : o,
        result : '',
    }
    switch (o) {
        case '+':
            output.result = a+b
            break;
    
        case '-':
            output.result = a-b
            break;
    
        case '*':
            output.result = a*b
            break;
    
        case '/':
            output.result = a/b
            break;
    
        case '^':
            output.result = Math.pow(a,b)
            break;
    
        default:
            console.error('Operator not math.')
            output.isError = true
            output.result = 'Operator not math.'
            break;
    }
    return output
}