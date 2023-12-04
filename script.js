 
    function myFunction(){

      var upper_checked = document.getElementById("uppercase").checked;
      var number_checked = document.getElementById("number").checked;
      var special_checked = document.getElementById("special").checked;

      var x = document.getElementById("myText").value;
      var all_character = "abcdefghijklmnopqrstuvwxyz";
      
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var number = "0123456789";
      var special = "-_!^`~@#$%^&*()"
      var passwordLength = x;
      var password = "";
      var counter = 0;

 if (upper_checked) {
    all_character += upper;  
  }
 if (number_checked) {
    all_character += number;  
  }
 if (special_checked) {
    all_character += special;  
  }

  console.log(all_character);


 while (counter < passwordLength){
   password += all_character.charAt(Math.floor(Math.random() * all_character.length));
   counter++;
 }    

 alert("Generated Password is : "+ password)
              
    }
     
  

 

