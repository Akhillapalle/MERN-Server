function fetchData(callback){
    setTimeout(()=>{
        callback('admin');
    },1000);
}

function MyData(callback){
    setTimeout(()=>{
        callback({id:10000});
    },3000);
}
module.exports={fetchData,MyData};
//async.js