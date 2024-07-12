let dataSets=[];
beforeAll(()=>{
    dataSets=['H','I','G','L'];
})
beforeEach(()=>{
    console.log('Before Each Setup is called');
})
afterEach(()=>{
    console.log('After each setup is called');
})
afterAll(()=>{
    dataSets=[];
    console.log(dataSets);
});
test('After all env',()=>{
    expect(dataSets.length).toBe(4);
})
test('searching ',()=>{
    expect(dataSets).toContain('G');
})
test('searching ',()=>{
    expect(dataSets).toContain('I');
})
//env.test.js