//example of an Array///
const myArray=[23,"23","jenish",true,[1,2,3,4,5]]

// Another way of creating an arrray
const carnameArray=new Array("volvo","hyundai","bmw")
// console.log(carnameArray)

// Difference between properties and methods
     //properties
    //  console.log(carnameArray.length)
    // method
    // console.log(Array.isArray(carnameArray));  

// changing element of an array//
myArray[0]="twenty three";
// console.log(myArray)

let firstFiveNumbers=myArray[4];
// console.log(firstFiveNumbers)

let index0fname=myArray.indexOf("jenish")
// console.log(index0fname)

// Mutating or Modifying Arrays
  myArray.push('sambahamphe')
  //   => push() helps to add an element at the end of an array
  myArray.pop();
 //=>    pop( ) deletes an element from the end of an array 

  myArray.unshift('breaking bad');
  //    =>unshift() helps to add an element at the start of an array
   myArray.shift() 
 //     =>Deletes an element form the start of an array

//  splice() => Removes defined elements of an array from defined index. In the following example the first argument 3 refers to the index from which we want to delete and second argument 2 refers to the number of element we want to delete
myArray.splice(3,2)
// console.log(myArray)

// concating an array////////
let array1=[1,2,3,4,5]
let array2=["six","seven","eight","Nine","Ten"];
array1=array1.concat(array2);
// console.log(array1)

// ////////////////////////////////////////////////////////////   Objects    ////////////////////////////////////////////////////




                
