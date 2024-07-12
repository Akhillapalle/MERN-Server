const {fetchData,MyData}= require('./test/async');
test('Data Expected Admin',done=>{
    function call(data){
        try{
            expect(data).toBe('admin');
            done();//test case completd
        }
        catch(error){
            done(error);
        }
    }
    fetchData(call);
})
test('Data Expected id',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10000);
            done();//test case completd
        }
        catch(error){
            done(error);
        }
    }
    MyData(callback);
})
//mock function
test('Mocking',done=>{
    const MockFunction=jest.fn(data=>{
        expect(data).toBe('admin');
        console.log('Mock Function');
        done();
    })
    fetchData(MockFunction);
})
//done is a callback parameter check executed or not only on async fun and call back fun
//async.test.js