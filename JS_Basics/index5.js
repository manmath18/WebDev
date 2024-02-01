document.addEventListener('click',function(){
    console.log('HEllo Bhai');
});
//performance-measure speed of code uisng performance.now()
//how to write efficient code
// for(let i=1;i<=100;i++){
//     let newELe=document.createElement('p');
//     newELe.textContent="This is Para "+ i;

//     document.body.appendChild(newELe);
// }
//optimising
// const t1=performance.now();

// let myDiv=document.createElement('div');
// for(let i=0;i<=100;i++){
//     let newELe=document.createElement('p');
//     newELe.textContent="This is Para "+ i;

//     myDiv.appendChild(newELe);
// }
// document.body.appendChild(myDiv);
// const t2=performance.now();
// console.log(t2-t1);

//using best way as document.fragment
// const t2=performance.now();

// let fragment=document.createDocumentFragment();
// for(let i=0;i<=100;i++){
//     let newELe=document.createElement('p');
//     newELe.textContent="This is Para "+ i;

//     fragment.appendChild(newELe);
// }
// document.body.appendChild(fragment);
// const t3=performance.now();
// console.log(t3-t2);

// //single threading

// function addPara(){
//     let para=document.createElement('p');
//     para.textContent='js is Single threaded';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent='This is Single ';
//     document.body.appendChild(para);
// }
// addPara();
// appendNewMessage();

//event loops


