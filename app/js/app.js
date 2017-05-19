/* main js file */ 
var navButton = document.querySelector('.btn-nav');
navButton.addEventListener('click', function(){
    var cl = this.getAttribute('class');
    if (cl === 'btn-nav'){
        this.classList.add('open');
    } else {
        this.classList.remove('open');
    }

});
