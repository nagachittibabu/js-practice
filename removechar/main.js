    /*
problem:creating a function to remove the white space and special characters from a string
solution:print the result string without whitespaces and special characters
step1:creating a function with a name removeSplchar
step2:Decalre the variable of string as 'strng' in the return function and declare the variable name as 'val' in the caller function
step3:using the for loop to given string to remove spl characters and white space by charcodes 
step4:return output
step5:console the function 
*/

removeSplChar = function (val) {
    let output = "";
    for (j = 0; j < val.length; j++) {
        if (!((val[j].charCodeAt() == 32) || (val.charCodeAt(j) >= 33 && val.charCodeAt(j) <= 47) || (val.charCodeAt(j) >= 58 &&
            val.charCodeAt(j) <= 64) || (val.charCodeAt(j) >= 91 && val.charCodeAt(j) <= 96) || (val.charCodeAt(j) >= 123 && val.charCodeAt(j) <= 126))) {
                output += val[j];
            }
    }
    return output;
}
let strng = "hj m2@uaf  s jhu49 6;po4= 1 43-=4 */!$%^*# chitti";
console.log(removeSplChar(strng));