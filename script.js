let x=0;
function Add(){
    if (x>=0&x<10){
        x=x+1;
    }
    console.log (x);
}
const button1 = document.querySelector('#button1');
button1.addEventListener('click',Add);
function Minus(){
    if (x<=10&x>0){
        x=x-1;
    }
    console.log (x);
}
const button2 = document.querySelector('#button2');
button2.addEventListener('click',Minus);