exports.calc = (a1, a2) => {
    let s=0;
    a2.map( (value, i) => { s = s+(a1[i]*value); });
    d = s/11;            
    r = Math.ceil(((d) - (Math.trunc(d))) * 10);
    r < 2 ? r = 0 : d1 = 11-r;
    return d1;
}