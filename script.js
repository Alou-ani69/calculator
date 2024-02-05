//claculator script
const Input = document.getElementById("inputs");
function cal(input){
    Input.value+= input;
 }
 function Equal(){
  try{
    Input.value=eval(Input.value);
  }catch{
    Input.value="Error";
  }
 }
 function Clear(){
  Input.value=" ";
 }
