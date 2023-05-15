let s ="";
let op = 0;
let slim = "";
let slime="";
let num1=0; 
let num2=0;
let result=0.0;
let prev=0;
let screen= document.getElementById("inputi");
let sliced="";
let val="";
function adding(ele) {

  if (ele == 12) {
    let d ="*";
    s = s+d;
    screen.value=s;
  }
  else if (ele == 13) {
    let d ="-";
    s = s + d;
    screen.value=s;
  }
  else if (ele == 14) {
    let d ="+";
    s = s + d;
    screen.value=s;
  }
  else if (ele == 11) {
    let d ="/";
    s = s + d;
    screen.value=s;
  }
  else if (ele == 15) {
    let d = "%";
    s = s + "%";
    screen.value=s;
  }
  else if (ele == 16) {
    let d = ".";
    s = s +d;
    screen.value=s;
  }
  else if (ele == 17) {
    let d = "00";
    s = s + d;
    screen.value=s;
  }

  else {
    s = s + ele;
   
   screen.value=s;
  }
  console.log(s)   // for printing up value 

}

function calculate() {
  let len = s.length;
  prev=result;

  for (let i = 0; i <= len; i++) {
    if (s[i] == "+" || s[i] == "*" || s[i] == "/" || s[i] == "-" || s[i] == "%") {
       op = i;
      console.log(i); // wo 4 iska operator index print ho rha hai 

    }
  }
  for (let j = 0; j < op; j++) {
    slim = slim + s[j];
  }
  console.log(slim); // fetch first number here 

  for (let j = op+1; j <len; j++) {
    slime = slime + s[j];
  }
  console.log(slime); // fetch second number here 


  // converting numbers into int and float respectively 

 num1=parseFloat(slim);
  console.log(num1);
   num2=parseFloat(slime);
  console.log(num2);
  let operat=s[op];
  if(operat=="+")
  {
  result=num1 + num2;
  console.log(result);
  screen.value= result;
  }
  else if(operat=="*")
  {
   result=num1*num2;
   screen.value=result;
  }
  else if(operat=="/")
  {
   result=num1 / num2;
   screen.value=result;
  }
  else if(operat=="-")
  {
   result=num1-num2;
   screen.value=result;
  }
  else if(operat=="%")
  {
   result=num1%num2;
   screen.value=result;
  }

  slim="";
  slime="";
  s="";
  s+=result;
  num1=result;
  return result;
}

// //  for button AC
// clear.addEventListener("click",function(){
//  location.reload();
// });

function refresh()
{
 let val=s.slice(0,0);
 screen.value=val;
 s=val;
 result=0;// result not zero fuckkkkkkkk 
}

// for del last word of string 
function del()
{
  let f=s.length;
   sliced=s.slice(0,f-1);
   screen.value=sliced;
   s=sliced;
}