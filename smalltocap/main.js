/*
problem:creating a function to replacing small case letters to capital letters in a string
solution:print the result string by replacing letters to upper case letters 
step1:creating a function with a name lowerToUpper
step2:Decalre the variable of string as 'strng' in the return function and declare the variable name as 'val' in the caller function
step3:using the for loop to given string to remove s 
step4:return output
step5:console the function 
*/

lowerToUpper = function (val) {
    let result = "";
    for (i = 0; i < val.length; i++) {
        if (val[i].charCodeAt() >= 97 && val[i].charCodeAt() <= 122) {
            output = val[i].charCodeAt() - 32;
            result += String.fromCharCode(output);
        }
        else {
            result += val[i];
        }
    }
    return result;
}
let strng = "i am nagaCHittibabu";
console.log("Result of converting all small letters of given string to capital", lowerToUpper(strng));










// let output=String.fromCharCode(99);
// console.log(output);