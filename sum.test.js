const sum= require('./test/sum')
//test cases
test('fun should return 2',()=>{
    expect(sum(1,2)).toBe(2);
})
//toEqual
test('Object in array', ()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
})
//toBeNull
test('Value is NUll',()=>{
    const a =null;
    expect(a).toBeNull();
})
//toBeDefined: define or not
test('Value is defined',()=>{
    const aa=1;
    expect(aa).toBeDefined();
})
//toBeTruthy: recieved value should be true
test('Value is Truth',()=>{
    const bool1=true
    expect(bool1).toBeTruthy();
})
//toBeFalsy : recieved value must be false
test('Value is False',()=>{
    const bool=false
    expect(bool).toBeFalsy();
})

//sum.test.js