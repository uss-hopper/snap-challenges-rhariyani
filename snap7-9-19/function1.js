/**
 Function #1
 Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.)
 Which operation is your choice.**/
function multiplyBy()
{
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 / num2;
}
