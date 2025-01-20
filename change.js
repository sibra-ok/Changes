let inputs=document.querySelectorAll('input');
/*
inputs.forEach(element=>{
element.addEventListener('change', (event) => {
console.log('done');

let img=document.getElementById('img');
let set=element.value;

console.log(set);
img.style.blur='20px';

let head=document.getElementById('head');

//head.style.backgroundColor='black';
});
})*/

let inputBar=document.getElementById('spacing');
inputBar.addEventListener('change',function(){

console.log('done');

let img=document.getElementById('img');
let set=inputBar.value;
console.log(set);

img.style.padding=`${set}px`;
})

let blurBar=document.getElementById('blur');
blurBar.addEventListener('change',function(){

console.log('done');

let img=document.getElementById('img');
let set=blurBar.value;
console.log(set);

img.style.filter=`blur(${set}px)`;
})

let BaseBar=document.getElementById('base');
BaseBar.addEventListener('change',function(){

console.log('done');

let img=document.getElementById('img');
let set=BaseBar.value;
console.log(set);

img.style.background=`${set}`;

let js=document.getElementById('js');
js.style.color=`${set}`;

})
