// //Promise
// let promise=new Promise((resolve,reject)=>{
//     let result=11;
//     if(result>10)
//     {
//         resolve(result)
//     }else{
//         reject("Error")
//     }
// })
// // promise.then(
// //     (result) => console.log('Result ',result),
// //     (message) => console.log('Error' ,reject)
// // )
// 
// //then and catch
// promise
//     .then(result=>console.log('Result: ',result))
//     .catch(reject=>console.log('Reject ',reject))

//-----------------------------------------------------------------------------

//Task --> Check whether value is positive or negative
// 
// let checkValue=(value)=>
// {
//     return new Promise((resolve,reject)=>{
//         if(value>=0)
//         {
//             resolve(value)
//         }
//         else{
//             reject('Value is Negative')
//         }
//     })
// }
// let value=7;
// checkValue(value)
//     .then(value => console.log('Value is Postive: ',value))
//     .catch(reject=>console.log(reject,value))


//-----------------------------------------------------------------------------

//Promise states --> Pending, Fulfilled, Rejected

let promise=new Promise((resolve,reject)=>
//setTimeout(()=))