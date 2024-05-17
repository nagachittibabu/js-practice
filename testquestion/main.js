// Question=creating a function to perform sorting,find big number and find big word
let array = [1, 8, 37, "Hello", "How are you", 72, 85, 37, 8, "Gaming", "software"]

arraySort = function (arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                max = arr[i];
                arr[i] = arr[j];
                arr[j] = max;
            }
        }
    }
    return arr;
}

bigNumberinArr = function (arr) {
    let bigNumber = 0;
    arr.forEach(item => {
        if (typeof (item) == 'number' && item > bigNumber) {
            bigNumber = item
        }
    });
    return bigNumber
}

bigWordinArr = function (arr) {
    let bigWord = "";
    let bigNum = 0;
    let str="";
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > bigNum) {
            bigNum = arr[i].length;
            bigWord = arr[i];
        }
    }
    return bigWord;
}
console.log(bigWordinArr(array));

arrayManpulation = function (arr, operator) {
    let output = 0;
    switch (operator) {
        case ("sortarr"):
            output = arraySort(arr);
            break;
        case ("bigNum"):
            output = bigNumberinArr(arr);
            break;
        case ("bigWord"):
            output = bigWordinArr(arr);
            break;
    }
    return output;
}
// console.log(arrayManpulation(array, "bigNum"));