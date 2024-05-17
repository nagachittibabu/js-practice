/*
problem:creating a function to tell who is older in the group
solution:print the result that who is older in the group
step1:creating a function with a name findOlder
step2:Decalre the variable of string as 'strng' in the return function and declare the variable name as 'val' in the caller function
step3:using the for loop to given string to remove spl characters and white space by charcodes 
step4:return output
step5:console the function 
*/



maxNum = function(arr) {
  let maxNum=-1;
  for(i=0;i<arr.length;i++) {
    if(arr[i] > maxNum) {
        maxNum=arr[i];
    }
  }
  return maxNum;
}
let array=[1,2,5,34,6,7,7,5,3,5,3,456];
console.log(maxNum(array));

findOlder = function(obj) {
  let oldestAge = 0;
  let oldestPerson = null

  obj.forEach(persons => {
    if(persons.age>oldestAge) {
      oldestAge = persons.age;
      oldestPerson = persons
    }
  });

  return oldestPerson
}
let obj=[{name:"chitti",age:70, id:1},{name:"bhavani",age:10, id:2},{name:"ramu",age:50, id:3}]
console.log("The older person in the group is:",findOlder(obj));