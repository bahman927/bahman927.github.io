let generateBtn = document.getElementById('generate') 
    function myFunction(){

      var upper_checked = document.getElementById("uppercase").checked;
      var number_checked = document.getElementById("number").checked;
      var special_checked = document.getElementById("special").checked;

      var x = document.getElementById("myText").value;
      var charset = "abcdefghijklmnopqrstuvwxyz";
      
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var number = "0123456789";
      var special = "-_!^`~@#$%^&*()"
      var passwordLength = x;
      var password = "";
      var counter = 0;

 if (upper_checked) {
    charset += upper;  
  }
 if (number_checked) {
    charset += number;  
  }
 if (special_checked) {
    charset += special;  
  }
  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  
  function containsNumber(str) {
    return /\d/.test(str);
  }
  
  function containsSpecialCharacter(str) {
    // Special characters include anything that is not a letter or a number
    return /[^\w\s]/.test(str);
  }
   
loop = true;
while (loop){
  password = ""
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  if ((upper_checked) && !containsUppercase(password)){continue;}
  if ((number_checked) && !containsNumber(password)){continue;}
  if ((special_checked) && !containsSpecialCharacter(password)){continue;}
  loop = false;
}
 alert("Generated Password is : "+ password)
//document.getElementById('my').innerHTML=password
              
    }
     
generateBtn.addEventListener('click', myFunction)

 

