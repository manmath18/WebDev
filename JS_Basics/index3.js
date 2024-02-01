console.log("Hello World1234567890!!!!!");
//primitive string
let a='Manmath';
//object string
let b=new String('Mungde');

let mess="This is my code";

let words=mess.split(' ');

// console.log(words);

//arrays
//insertion
let numbers=[1,2,3,3,4,5,5,6,6];
// console.log(numbers[3]);

//end
numbers.push(90);
//begin
numbers.unshift(46);
//middle
numbers.splice(3,0,'a');
// console.log(numbers);

//searching
// console.log(numbers.indexOf(90));
//checks whether the number is present in the array
// console.log(numbers.includes(90));

let courses=[
    {no:1 ,nam:'Manmath'},
    {no:2,nam:'Mungde'}
];

// console.log(courses);
//gives false because it is another reference
// console.log(courses.includes({no:1,nam:'Manmath'}));

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 
//using callback function
// let course=courses.find(function(course){
//     return course.nam=='Manmath';
// })
// console.log(course);

//using arrow func
let course=courses.find(course=>course.nam==='Mungde');
// console.log(course);

//removing element from array
//end
numbers.pop();
//begin
numbers.shift();
//middle
numbers.splice(4,1);

// console.log(numbers);
//commbining the arrays
let f=[1,2,3];
let s=[4,5,6];

let combine=f.concat(s);
// console.log(combine);

//slicing the arrays
// let slice=combine.slice(2,5);
// console.log(slice);

//using for-each loops
let arr=[2,3,4,5,7,6];

// let num=arr.forEach(num => {console.log(num); 
// });

//joining the arrays
let n=arr.join('*');
// console.log(n);

// let split=mess.split(" ");
// console.log(split);

//sorting the arrays
console.log(arr.sort());

//can use filter function to filter the values in array



