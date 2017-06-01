/* main js file */ 

/********* activating the hamburger menu **************/
var navButton = document.querySelector('.btn-nav');
navButton.addEventListener('click', function(){
    var cl = this.getAttribute('class');
    if (cl === 'btn-nav'){
        this.classList.add('open');
    } else {
        this.classList.remove('open');
    }

});

/********** changing logo colors  *****************/

var allegro = document.getElementById('allegro');
var ebay = document.getElementById('ebay');
var leff = document.getElementById('leff-hurt');
/* allegro */
allegro.addEventListener('mouseover', function(){
    this.setAttribute('src', '/img/allegro_col.png');
});
allegro.addEventListener('mouseout', function(){
    this.setAttribute('src', '/img/allegro_bw.png');
});

/* ebay*/
ebay.addEventListener('mouseover', function(){
    this.setAttribute('src', '/img/ebay_col.png');
});
ebay.addEventListener('mouseout', function(){
    this.setAttribute('src', '/img/ebay_bw.png');
});

/** Leff hurt */
leff.addEventListener('mouseover', function(){
    this.setAttribute('src', '/img/leff-hurt_col.png');
});
leff.addEventListener('mouseout', function(){
    this.setAttribute('src', '/img/leff-hurt_bw.png');
});


