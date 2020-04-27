
function addstr(){


var str1= document.getElementById("one").value;
var str2= document.getElementById("two").value;

var mlen= document.getElementById("three").value;
var mstr;


var l=str1.length;


var l2= str2.length;


if(l==0 && l2==0){
    var x =  "There is no string in  both input PLease enter String ";
    document.getElementById("demo").innerHTML = x;
}
else if(l==0){
    var x =  "There is no string in  first input PLease enter String ";
    document.getElementById("demo").innerHTML = x;
}
else if(l2==0){
    var x =  "There is no string in second input PLease enter String ";
    document.getElementById("demo").innerHTML = x;
}
else if( mlen ==0){
    var x =  "Please Enter a  Valid Length ";
    document.getElementById("demo").innerHTML = x;

}


else if(mlen ==l + l2)
{
      let mstr= str1.concat(str2);
   
      document.getElementById("demo").innerHTML = mstr;
}
else if(mlen > l + l2){

    var x =  "Please Enter a  Valid Length ";
    document.getElementById("demo").innerHTML = x;

}
else {
var lst= Math.floor(Math.random()*(l-1));

if(lst==0)
{  
  lst=lst+1;  
}



var fstr1 = str1.substring(0,lst);



var fstrln= fstr1.length;
var rem = mlen-fstrln;

var fstr2= str2.substring(0,rem);
 var fstrln2=fstr2.length;


if( fstrln + fstrln2 < mlen ){
  let a = l-lst;
  lst = lst +a;
  var fstr1 = str1.substring(0,lst);
  var fstrln= fstr1.length;
  var rem = mlen-fstrln;   
  var fstr2= str2.substring(0,rem);
  mstr= fstr1.concat(fstr2);
   document.getElementById("demo").innerHTML = mstr;

}
if( fstrln +fstrln2 > mlen)
{
    let a = l-lst;
    lst = lst -a;
    var fstr1 = str1.substring(0,lst);
    var fstrln= fstr1.length;
    var rem = mlen-fstrln;   
    var fstr2= str2.substring(0,rem);
    mstr= fstr1.concat(fstr2);
     document.getElementById("demo").innerHTML = mstr;

}

mstr= fstr1.concat(fstr2);

document.getElementById("demo").innerHTML = mstr;

}

}


