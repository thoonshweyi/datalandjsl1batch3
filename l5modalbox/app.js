var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');
var getbtnclose = document.querySelector('.btn-close');


getbtnsignup.addEventListener('click',function(){
    getmodal.style.display = 'block';
});

getbtnclose.addEventListener('click',function(){
    getmodal.style.display = 'none';
});

window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = 'none';
    }
};

var getde = document.documentElement;
console.log(getde);
getbtnfullscreen.addEventListener('click',function(){
    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){ //for microsoft
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){ //for safari , ie
        getde.webkitRequestFullscreen();
    }
    getbtnclosescreen.style.display = 'inline-block';
});


//exitFullscreen get error when fullscreen mode is off
getbtnclosescreen.addEventListener('click',function(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }
    getbtnclosescreen.style.display = 'none';
});


// 16DONE