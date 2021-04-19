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