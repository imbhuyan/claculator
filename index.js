 console.log("kalsjsxh");
 
 
 let screen = document.getElementById("scr");
buttons = document.querySelectorAll("button");
let screenvalue ="";
for (item of buttons)
{
 item.addEventListener("click",(e)=>
 { 
  buttonText = e.target.innerText;
 
  if(buttonText == "DEL")
  {
    screenvalue = "";
    scr.value = screenvalue; 
  }
  else if(buttonText == "AC"){
    screenvalue = "";
    scr.value = screenvalue;
  }
  else if(buttonText == "=")
  {
      scr.value = eval(screenvalue);

  }
  else{
    screenvalue += buttonText;
    scr.value = screenvalue;
  }


 })
     
}