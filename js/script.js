// JavaScript Document
document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");
var _string=new Array();
var _type;
function typetoinput(num)
{
	input=document.getElementById("input-box");
	if(input.name=="type")
	{
		input.value=" ";
		input.name=" ";
	}
	if(num!="."&&input.value[0]==0&&input.value[1]!=".")
	{
		input.value=num; //Reset input num
	}
	else if(num=="."&&input.value.indexOf(".")>-1)
	{
		input.value=input.value; //Only one point allow input
	}
	else if(input.value=="Infinity"||input.value=="NaN")
	{
		input.value="";
		input.value+=num; //Splicing string
	}
	else
	{
		input.value+=num;
	}
}

function operator(type)
{
	switch (type)
	{
		case "clear":
				input.value="0";
				_string.length=0;
				break;
		case "backspace":
				if(checknum(input.value)!=0)
				{
					input.value=input.value.replace(/.$/,'');
					if(input.value=="")
					{
						input.value="0";
					}
				}
				break;
	}
}
function checknum(inputvalue)
{
	if(input.value=="0")
	{
		return 0;
	}
}

window.document.onkeydown = disableRefresh;
function disableRefresh(evt){
evt = (evt) ? evt : window.event
if (evt.keyCode)
{
   if(evt.keyCode == 13){operator('result')}
   else if(evt.keyCode == 8){input.focus();window.event.returnValue = false;operator('backspace')}
   else if(evt.keyCode == 27){operator('clear')}
   else if(evt.keyCode == 48){typetoinput('0')}
   else if(evt.keyCode == 49){typetoinput('1')}
   else if(evt.keyCode == 50){typetoinput('2')}
   else if(evt.keyCode == 51){typetoinput('3')}
   else if(evt.keyCode == 52){typetoinput('4')}
   else if(evt.keyCode == 53){typetoinput('5')}
   else if(evt.keyCode == 54){typetoinput('6')}
   else if(evt.keyCode == 55){typetoinput('7')}
   else if(evt.keyCode == 56){typetoinput('8')}
   else if(evt.keyCode == 57){typetoinput('9')}
   else if(evt.keyCode == 96){typetoinput('0')}
   else if(evt.keyCode == 97){typetoinput('1')}
   else if(evt.keyCode == 98){typetoinput('2')}
   else if(evt.keyCode == 99){typetoinput('3')}
   else if(evt.keyCode == 100){typetoinput('4')}
   else if(evt.keyCode == 101){typetoinput('5')}
   else if(evt.keyCode == 102){typetoinput('6')}
   else if(evt.keyCode == 103){typetoinput('7')}
   else if(evt.keyCode == 104){typetoinput('8')}
   else if(evt.keyCode == 105){typetoinput('9')}
}
}