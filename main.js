//Email validation
//Checkt ob wirklich eine Email mit @xxx.xxx hinzugefügt wurde
function validateemail(){  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Bitte geben Sie eine verf\u00fcbare Email ein.");  
  return false;  
  }  else {
  	alert("Ihre Nachricht wurde gesendet");
  }
}
