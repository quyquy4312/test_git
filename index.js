const button= document.getElementById('button');
const title=document.querySelector('.title')

function tong(a,b){
    return a+b;

}

function thaydoi(){ 
    button.style.width='500px'
    title.innerHTML=`tổng của 3 và 4 : ${tong(3,4)}`;
}
// console.log(button);
// button.addEventListener('click',function(){
// alert('xin chao ban');
// });
// button.onclick=xinchao;

// button.addEventListener('mouseover',thaydoi);
button.onmouseover=thaydoi; 




















