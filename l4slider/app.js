var slides = document.getElementsByClassName('carousel-item');
// console.log(slides);

var dots = document.querySelectorAll('.dot');
// console.log(dots);

var currentslide = 1;


//Previous btn
document.getElementById('prev').addEventListener('click',function(){
    carousel(currentslide -= 1);
});

// Next btn
document.getElementById('next').addEventListener('click',function(){
    carousel(currentslide += 1);
});

for(var q = 0 ; q < dots.length ; q++){
    dots[q].addEventListener('click',function(){
        currentslide = this.getAttribute('data-bs-slide-to');
        carousel(currentslide);
    });
} 


carousel(currentslide);
function carousel(slidenum){

    var x,y;

    //hide all slides
    for(x = 0 ; x < slides.length; x++){
        slides[x].style.display = 'none';
    }

    //hide all dots
    for(y = 0 ; y < dots.length ; y++){
        // dots[y].classList.remove('active');
        // dots[y].className = 'dot';
        dots[y].className = dots[y].className.replace('active','');
    }


    //restrict for currentslide
    if(slidenum > slides.length){
        currentslide = 1;
    }else if(slidenum < 1){
        currentslide = slides.length;
    }

    console.log(currentslide);

    slides[currentslide -1 ].style.display = 'block';

    // dots[currentslide - 1].className = 'dot active';
    dots[currentslide - 1].className += ' active';
    // dots[currentslide - 1].classList.add('active');
}

// 15DT