var myDivFunction = function(){
  var myDiv = document.getElementById('this-is-my-div');
  console.log('Hello');

  if (myDiv) {
    myDiv.textContent = 'hi';
    console.log(myDiv);
  } else {
    console.log('No Div found');
  }

}

window.onload = myDivFunction;
