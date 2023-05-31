//  find the area of square with th given array of radius
// let radius=[7,14,21,35];
// let findArea=function(radius){
//   let Output=[];
//   for(i=0; i<radius.length; i++){
//     Output.push(Math.PI*radius[i]*radius[i])
//   }
//   return Output
// }
// console.log(findArea(radius))

// //  to calculate circumference///////
// let findCircumference=function(radius){
//     let Output=[];
//     for(i=0; i<radius.length; i++){
//       Output.push(Math.PI*2*radius[i])
//     }
//     return Output
//   }
//   console.log(findCircumference(radius))

// //   To find diameter////////////
// let findDiameter=function(radius){
//     let Output=[];
//     for(i=0; i<radius.length; i++){
//       Output.push(2*radius[i])
//     }
//     return Output
//   }
//   console.log(findDiameter(radius))

// It is a virtue of a good coder to write as less code as he can and get the job done so  These Code can be minimized by using higher order function dry=>dont repeat yourself
// let Area=function(radius){
//    return Math.PI * radius * radius
// }
// let circumference=function(radius){
//   return  Math.PI * radius * 2
// }
// let diameter=function(radius){
//     return 2* radius
// }
// let calculate=function(radius,logic){
//     let output=[];
//     for(i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
// console.log(calculate(radius,diameter))



// example////////////////////////////////////
// let lengthOfMyRoom=[6,7,8,9]
// let length=[2,3,4,5];
// let area=function(length){
//     return length * length;
// }
// let volume=function(length){
//     return length * length * length
// }

// let find=function(length,logic){
//   let output=[];
//   for(i=0; i<length.length; i++){
//     output.push(logic(length[i]))
//   }
//   return output;
// }
// console.log(length.map(volume));


