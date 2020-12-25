window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    // var menu = document.querySelector('.toggle');
    header.classList.toggle('sticky', window.scrollY > 120);
    // menu.classList.toggle('filter', window.scrollY > 150);
});
var iconMenu = document.querySelector('.header__toggle');
        var itemMenu  = document.querySelectorAll('.header__menu li');
        for(let i=0;i<itemMenu.length;i++){
            itemMenu[i].addEventListener('click',function(){
                menu.classList.remove('open');
            })
        }
        var menu = document.querySelector('.header__menu');
        iconMenu.addEventListener('click',function(){
            menu.classList.toggle('open');
            iconMenu.classList.toggle('close');
        });