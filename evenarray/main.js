/*
problem:creating a function to return even numbers from an array
solution:print the even numbers in the array

step1:creating a function with name evenArr 
step2:Decalre the variable of array as 'arr' in the return function and declare the variable name as 'val' in the caller function
step3:using the for loop to given array seperate the even numbers by using, (%2==0) if it satisfies print else skip
step4:return output
step5:console the function 
*/


evenArr = function (val) {
    let output = [];
    for (i = 0; i < val.length; i++) {
        if (val[i] % 2 == 0) {
            output.push(val[i]);
        }
    }
    return output;
}
let arr = [1, 2, 3, 4, 5, 87, 5, 3, 677, 4566, 4, 7, 4, 7, 4, , 7, 8, 7]
console.log(evenArr(arr));