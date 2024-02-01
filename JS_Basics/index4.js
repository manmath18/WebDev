// function run(){
//     console.log('running');
// }
// run();


// //function assignment
// let assig=function walk(){
//     console.log('walking');
// }

// assig();

//anonymous function 
// let stand=function(){
//     console.log('walking');
// }
// stand();


//arguments are the specila objects in JS


// function sum(){
//     let total=0;
//     for(let value of arguments){
//         total+=value;
//     }
//     return total;
// }

// let ans=sum(1,4,5,5,6);
// console.log(ans);

//rest operator is stored like array
// function sum(...args){
//     console.log(args);    
// }

// sum(4,5,6,6,7);

//default parameters
// function it(p,r,y=10){
//     return p*r*y/100;
// }

// console.log(it(1000,5,));

let person={
    fName:'Manmath',
    lName:'Mungde',
    //getter
    get Name(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
};
// person.fullName='Rahul Kumar';
// console.log(person.Name);



// Name();

//error handling
try{ 
    person.fullName=1;
}
catch(e){
    alert('You have entered the Wrong parameter')
}










