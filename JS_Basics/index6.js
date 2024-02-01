//async code
// setTimeout(function(){
//     console.log("third");
// },3000)
// function sync(){
//     console.log("second");
// }
// sync();
// console.log("first");

// let myPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Inside Promise");
//     },5000)
//     resolve(123456789);
//     // reject(new Error('there is error'));
// });
// // myPromise.catch((error)=>{console.log("receive Error")});
// myPromise.then((value)=>{console.log(value)});
// console.log('Pehla');


//multiple promises
// let w1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("SetTimeout1 Started");
//     },5660)
//     resolve(true);
// })

// w1.then(()=>{
//     let w2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("SetTimeout2 Started");
//         },8009)
//         resolve("w2 is resolved");
//     })
//     return w2;
// }).then((value)=>{console.log(value)});

//aysnc functions
// async function abcd(){
//     return "Manmath";
// }
// async function utility(){
//     let del=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("delhi mai bahut garmi hain");
//         },1000);
//     });
//     let hyd=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hyd mai bahut thandi hain");
//         },5000);
//     });
//     let dM= await del;
// let hM=await hyd;
// return [dM,hM];
// }

// //fetch apis
// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output=await content.json();
//     console.log(output);
// }
// utility();
//use for refernce https://www.w3schools.com/whatis/whatis_json.asp

// post in apis
// async function helper(){
//     let options={
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       }
// let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);
// let response=content.json();
// return response;
// }
// async function utility(){
//     let ans=helper;
//     console.log(ans);
// }
// utility();












