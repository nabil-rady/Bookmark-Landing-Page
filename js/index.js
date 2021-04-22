const navItems = $('.slider__nav__ul__li');
const tabs = $('.slider__tabs');
const bodies = $('.slider__tabs__tab__body');
navItems.click( event =>{
    const target = $(event.currentTarget);
    navItems.removeClass('current');
    target.addClass('current');
    tabs.removeClass(['first','second','third']);
    if (target.hasClass('first')){
        tabs.addClass('first');
    }
    else if(target.hasClass('second')){
        tabs.addClass('second');
    }
    else    
        tabs.addClass('third');
})
$('.header__burgers').click(()=>{
    $('.mobile-menu').show(200,()=>{});
});
$('.mobile-menu__close').click(()=>{
    $('.mobile-menu').hide(200,()=>{});
});
$('#contact-us').click(()=>{
    console.log($('#email').val());
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($('#email').val())){
        $('#email').css('background-image',"none");
        $('#email').css('border','none');
        $('form').removeClass('show');
    }
    else{
        $('#email').css('background-image','url("./images/icon-error.svg")');
        $('#email').css('border','2px #fa5757 solid');
        $('form').addClass('show');
    }
});
const stopResponsiveTransition = () =>{
    let timer = null;
    window.addEventListener('resize', function () {
    if (timer){
        clearTimeout(timer);
        timer = null;
    }
    else {
        tabs.addClass('stop-transition');
    }
    timer = setTimeout(() => {
        tabs.removeClass('stop-transition');
        timer = null;
        }, 100);
    })
};
stopResponsiveTransition();