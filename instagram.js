document.onload = ()=>{
 var x =  document.getElementById("changecolor");
 var y = document.getElementById("boxes");
 x.addEventListener("click",Myfun);
 function Myfun(){
     y.style.backgroundColor = "blue";
 }
} 