console.log("this my form2")
function validateForm(e) {
    console.log("this my form2")
    event.preventDefault();
    var firstname = document.forms["myForm"]["firstname"].value;
    var lastname = document.forms["myForm"]["lastname"].value;
    if (firstname == "") {
      alert("Name must be filled out");
      }
    else if (lastname=="")
    {
        alert(" all fields must be filled out");
    }
   document.getElementById('fname').innerHTML="";
   document.getElementById('lname').innerHTML="";
}
