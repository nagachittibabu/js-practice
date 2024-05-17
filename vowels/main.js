/*
problem:creating a function to find the vowels in a given string
solution:need to find a,e,i,o,u 
step1:creating a function with name printVowels
step2:declaring the variable name of string is str1
step3:using a for loop to string to print vowels by equating to charcode values of  every index to 
       a(97),e(101),i(105),o(111),u(117), or A(65),E(69),I(73),O(79),U(85)
step4:Return the output
step5:console the function
*/



printVowels = function (val1) {
    let output = "";
    for (j = 0; j < val1.length; j++) {
        if (val1[j].charCodeAt() == 97 || val1[j].charCodeAt() == 101 || val1[j].charCodeAt() == 105 || val1[j].charCodeAt() == 111 || val1[j].charCodeAt() == 117 ||
            val1[j].charCodeAt() == 65 || val1[j].charCodeAt() == 69 || val1[j].charCodeAt() == 73 || val1[j].charCodeAt() == 79 || val1[j].charCodeAt() == 85) {
            output += val1[j];
        }
    }
    return output;
}
let str1 = "i i i i i i i i i i arsafs asfasf f i i i";
let str = "this is all about to learning about java";
let str3 = "iamlearningaboutthejavascript";
console.log(printVowels(str));