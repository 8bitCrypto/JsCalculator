function displayNumber(num){
    result.value+=num
}

// clear text box 

function clearBox(){
    result.value="";
}

//evaluate expression
function evaluateExpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
  }
  
  function removelastitem(){
      currentexpression=result.value;
      result.value=currentexpression.slice(0,-1);
  }