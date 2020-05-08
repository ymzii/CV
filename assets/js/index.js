window.onload = function(){
    // 侧边栏定位
const left = document.getElementById('left')
const toggleButton = document.getElementById('toggle-button')
toggleButton.onclick = function(){
    if(this.checked == true){
       left.style.position = 'fixed'
    }else{
        left.style.position = 'relative'
    }
}  
console.log(123);
}
