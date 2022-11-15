function calculateZakat(input) {
    if (input.length == "") {
      alert("Numbers cannot be blank");
      return false;
    }
  
    if (isNaN(input)) {
      alert("The input must be a number");
      return;
    }

  
    var inputAmount = parseInt(input);
    var result = inputAmount * .025;
    
    alert("Total: " + result);

    
  }