$('.faq__item').accordion({
    active: true,
    collapsible: true,
    heightStyle: "content",
    animate: 400,
});

ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
};

$('.otzov__slider').flexslider({
    selector: ".otzov__list > li",
    animation: "slide",
    controlNav: false,
    slideshow: false,
    smoothHeight: false,
    touch: true,
    start: function(){
    $('.otzov__list').children('li').css({
    'opacity': 1,
    'position': 'relative'
    });
    }
    });

