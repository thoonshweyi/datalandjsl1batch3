var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
    scrollpoint();
};

function scrollpoint(){
    // console.log('i am working');

    // st * 100 / (ph - ch)

    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    var getcliehtheight = document.documentElement.clientHeight;
    // console.log(getcliehtheight);

    var calcheight = getscrollheight - getcliehtheight;

    // var getfinal = Math.round((getscrolltop * 100) / calcheight);
    var getfinal = Math.round((getscrolltop / calcheight) * 100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}


function printme(){
    window.print();
}