function calculateZakat(input) {
    if (input == "") {
      alert("Numbers cannot be blank");
      return;
    }
  
    if (isNaN(input)) {
      alert("The input must be a number");
      return;
    }

    const zakatPercentage = .025;
    var inputAmount;
    inputAmount = parseInt(input);
    var result;
    result = inputAmount * zakatPercentage;
    
    //alert("Total: " + result);

document.getElementById('totalDisplay').innerHTML = "Zakat Payable: " + result;
  }