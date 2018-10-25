
  function clickNum0(){

	if (document.getElementById("result").textContent != null)
	{
		document.getElementById("result").textContent = document.getElementById("result").textContent + "0";
	}
	else(document.getElementById("result").textContent = "0")
  }
  function clickNum1(){

	if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "1";
	}
	else(document.getElementById("result").textContent = "1")
  }
  function clickNum2(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "2";
	}
	else(document.getElementById("result").textContent = "2")
  }
  function clickNum3(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "3";
	}
	else(document.getElementById("result").textContent = "3")
  }
  function clickNum4(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "4";
	}
	else(document.getElementById("result").textContent = "4")
  }
  function clickNum5(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "5";
	}
	else(document.getElementById("result").textContent = "5")
  }
  function clickNum6(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "6";
	}
	else(document.getElementById("result").textContent = "6")
  }
  function clickNum7(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "7";
	}
	else(document.getElementById("result").textContent = "7")
  }
  function clickNum8(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "8";
	}
	else(document.getElementById("result").textContent = "8")
  }
  function clickNum9(){

    if (document.getElementById("result").textContent != null)
	{
    document.getElementById("result").textContent = document.getElementById("result").textContent + "9";
	}
	else(document.getElementById("result").textContent = "9")
  }

  function clickC(){
	document.getElementById("result").textContent = "";
  }

  // Botões de Operação

var v1, v2, op;

 function clickdiv(){
  op = "divi";
	v1 = document.getElementById("result").textContent;
	document.getElementById("result").textContent = "";

 }

 function clickmul(){
  op = "multi";
	v1 = document.getElementById("result").textContent;
	document.getElementById("result").textContent = "";
 }

 function clickmin(){
  op = "minus";
	v1 = document.getElementById("result").textContent;
	document.getElementById("result").textContent = "";
 }

 function clickplus(){
  op = "plus";
	v1 = document.getElementById("result").textContent;
	document.getElementById("result").textContent = "";
 }

 function clickequal(){
	/* colocar if para cada uma das operações*/
if (op == "divi")
{
  v2 = document.getElementById("result").textContent;
  document.getElementById("result").textContent = (v1 / v2);
}
if (op == "multi")
{
  v2 = document.getElementById("result").textContent;
  document.getElementById("result").textContent = (v1 * v2);
}

if (op == "minus")
{
  v2 = document.getElementById("result").textContent;
  document.getElementById("result").textContent = (v1 - v2);
}

if (op == "plus")
{
  v2 = document.getElementById("result").textContent;
  v1 = parseInt(v1);
  v2 = parseInt(v2);
  document.getElementById("result").textContent = (v1 + v2);
}
}

function clickdot(){
  alert("Ainda não implementado!")
}
