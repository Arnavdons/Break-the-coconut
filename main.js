number=100000;
coco=document.querySelector("#coco")

function tap(){
number=number-1;
console.log(number)
document.getElementById("number").innerHTML=number;
}

if(number==0){
document.getElementById("won").innerHTML="You won the game!!!!!!!!!";
}