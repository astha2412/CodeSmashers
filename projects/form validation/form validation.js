console.log("this my form by css")
function validateForm(e) {
    
    // event.preventDefault();
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["fpassword"].value;
    if (x == "") {
      alert("Name must be filled out");
      }
    else if (y=="")
    {
        alert("password must be filled out");
    }
   document.getElementById('username').innerHTML="";
   document.getElementById('password').innerHTML="";
   e.preventDefault();
  }






  //  enter numberbtw 1 t0 10 wala part
  function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }




  // dom validation

  function myFunction2() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo2").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo2").innerHTML = "Input OK";
    } 
  } 
  