ascending = function(arr) {
    for(i=0;i<arr.length;i++) {
       for(j=0;j<arr.length;j++) {
           if(arr[i]<arr[j]) {
              max=arr[i];
              arr[i]=arr[j];
              arr[j]=max;
           }
       }
    }
    return arr
   }
   let arra=[1,2,4,35,2,6,7,4,33]
   console.log(ascending(arra));
   
   
   
   
   arrmanupulatn = function(arr1,arr2) {
let output=[];
let outputArr=[];
    output=arr1.concat(arr2);
    outputArr=ascending(output);
    outputArr=Array.from(new Set(outputArr));
    console.log(outputArr);

}
let array1=[1,24,6,3,5,6]
let array2=[4,2,8,33,76,3,5,3,4,]
console.log(arrmanupulatn(array1,array2));