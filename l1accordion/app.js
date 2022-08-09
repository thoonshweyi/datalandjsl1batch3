var getacctitles = document.getElementsByClassName('acctitle');
// console.log(getacctitles);
var getacccontents = document.querySelectorAll('.acccontent');
// console.log(getacccontents);


for(var x = 0 ; x < getacctitles.length ; x++){
    
    getacctitles[x].addEventListener('click',function(e){
        // console.log(e.target);
        // console.log(this);

        this.classList.toggle('active');

        var getcontent = this.nextElementSibling;
        // console.log(getcontent);

        if(getcontent.style.height){
            getcontent.style.height = null; //beware can't set 0
        }else{
            // console.log(getcontent.scrollHeight);
            getcontent.style.height = getcontent.scrollHeight + 'px';
        }
    });

    if(getacctitles[x].classList.contains('active')){
        getacccontents[x].style.height = getacccontents[x].scrollHeight + 'px';
    }
}