
// UI
var modalel = document.querySelector('.modal');
var oploginmodalbtn = document.querySelector('.oploginmodalbtn');
var closebtn = document.querySelector('.closebtn');
var fullscreenbtn = document.querySelector('.fullscreenbtn');


oploginmodalbtn.addEventListener('click',function(){
    modalel.style.display = 'flex';
});

closebtn.addEventListener('click',function(){
    closemodal();
});

window.addEventListener('click',function(e){
    if(e.target === modalel){
        closemodal();
    }
});
fullscreenbtn.addEventListener('click',function(){
    var dom = document.documentElement;
    if(dom.requestFullscreen){
        dom.requestFullscreen();
    }else if(dom.webkitRequestFullscreen){
        dom.webkitRequestFullscreen();
    }else if(dom.msRequestFullscreen){
        dom.msRequestFullscreen();
    }
    localStorage.setItem('fullscreenmode','on');
});


function closemodal(){
    modalel.classList.add('closemodal');
    setTimeout(function(){
        modalel.classList.remove('closemodal');
        modalel.style.display = 'none';
    },800);
}

