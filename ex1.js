var a;
var b;

document.getElementById("ok").addEventListener("click",()=>{
    a=document.getElementById("first").value;
    b=document.getElementById("second").value;
    a=parseFloat(a);
    b=parseFloat(b);
   window.alert(a);
   window.alert(b);
   window.alert("somme: "+(a+b));
   window.alert("diff:"+ (a-b));
   window.alert("multiplication"+(a*b));
   window.alert("divi:"+(a/b));
});


var x=Math.random()*5;
var count=0;
x=parseInt(x);
console.log(x);
document.getElementById("try").addEventListener("click", ()=>{
    count++;
    let z=document.getElementById("random").value;
    console.log(z);
    if(z==x){
        window.alert("success");
        window.alert("you did it in "+count+" tries")
    }
    else{
        window.alert("try again");
    }
});