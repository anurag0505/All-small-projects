
let finalDisplay = 0;
 

window.onload = function () {
  $(".allButton").click(function (e) {
    
    var buttonText = e.target.innerText; 
    console.log(buttonText)
   

    let inputValue = $(".input").val();
    
    if (buttonText == "x") {
      buttonText = "*";
      
    }
    if (buttonText == "c") {
      buttonText = ""
      inputValue = "";
    }
    
    if (buttonText == "=") {
      let evalue = eval(inputValue);
      $(".input").val(evalue)
    } else {
       finalDisplay = inputValue + buttonText
      $(".input").val(finalDisplay)
    
    }
 

    
     

    
    
});  
}


