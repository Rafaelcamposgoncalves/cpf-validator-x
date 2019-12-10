const calc = require('./calc');
exports.isCpf = (a, e) => {
    a = a.toString().replace(/\./gi, "").replace('-', "");
    const arr = a.substring(9,0);
    const n1 = calc.calc(arr, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
    const n2 = calc.calc(arr+n1, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
    const ccpf = arr+n1+n2.toString();
    let status = false;
    if (ccpf != a){
        if(!e){
            return {'res': status, 'cpf': a};
        }
        return {'res': status, 'cpf': a, 'error': e};
    }
    status = true;
    return {'res': status};
}