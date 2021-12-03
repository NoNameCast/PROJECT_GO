$('.faq__item').accordion({
    active: true,
    collapsible: true,
});


ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }

