'use strict';

const sidebar =document.querySelector('.sidebar');
const btnSetting= document.querySelector('.btn-setting');

btnSetting.addEventListener('click',()=>{

    sidebar.classList.toggle('active');
    
});