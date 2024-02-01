console.log("Hello World!!!");

let rectangle={
    //properties
    l:45,
    b:78,
    //methods
    draw: function(){
        console.log('draw');
    }
};
//Object Creation
//creating other rectangle---Factory Function or Constructor Function
//Factory Function
function createRec(){
    let rectangle={
        //properties
        l:45,
        b:78,
        //methods
        draw: function(){
            console.log('draw');
        }
    };
    return rectangle;

    //or
    // return rectangle={
    //     //properties
    //     l:45,
    //     b:78,
    //     //methods
    //     draw: function(){
    //         console.log('draw');
    //     }
    // };
}
// creating objects
let rec2=createRec();
function createRec(len,bre){
    let rectangle={
        //properties
        l:len,
        b:bre,
        //methods
        draw: function(){
            console.log('drawing rectengle');
        }
    };
    return rectangle;
}
let rec3=createRec(5,4);
//Constructor Function
//this follows Pascal Notation--> First Letter of Every Word is Capital
//initialises the object values
function Rectangle(leng,brea){
     this.l=leng;
     this.b=brea;
     this.draw=function(){
        console.log("drawing");
     }
}
let rec4=new Rectangle(5,6);
//dynamic nature of objects
// rec4.color="blue";
// console.log(rec4);
// delete rec4.l;
// console.log(rec4);

//creating the deafault constructor
let rect=new Function('len','bre',`
    this.l=len;
    this.b=bre;
    this.draw=function(){
       console.log("drawing");
    }`)
let rec5=new rect(4,5);

//reference types
// let a={val:5};
// let b=a;
// a.val++;
// console.log(a.val);
// console.log(b.val);

// let a={val:54};
// function inc(a){
//     a.val++;
// }
// inc(a);
// console.log(a.val);

//using for-in loops
let rec={
    len:6,
    bre:56
};
// for(let key in rec){
//     //keys are reflected by key
//         console.log(key,rec[key]);
// }

// for-of loops are used in iterables
// trying it on objects
// for(let key of Object.keys(rec)){
    // console.log(key);
// }

// if('col' in rec){
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }

//object cloning
//using iteration
// let clone={};
// for(let key in rec){
//     clone[key]=rec[key];
// }
// rec.len++;
// console.log(rec.len);
// console.log(clone.len);

//using assign operator 
// let clone2=Object.assign({},rec);
// rec.len++;
// console.log(rec.len);
// console.log(clone2.len);

//using spread operator
// let clone3={...rec};
// rec.len++;
// console.log(rec.len);
// console.log(clone3.len);

//Garbage Collection




