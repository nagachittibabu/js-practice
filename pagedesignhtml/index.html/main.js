onclicking = function() {
  document.getElementById("output").innerHTML= factorial(document.getElementById("sample").value);
}

  function factorial(n) { 
      let ans = 1; 
       
      if(n === 0 || n === 1 ) {
          return 1;
      }
      for (let i = 2; i <= n; i++)  {
          ans = ans * i; 
      }
      return ans; 
  }
