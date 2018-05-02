$(document).ready(function(e){
    
    var item = $('.facebook_item>ul>li');
        var slide = $('.slider_wrap>ul>li');
        var slideCount = $('.slider_wrap>ul>li').length;

item.addClass('f_off');
console.log('ready');
item.on('click', function(e) {


            var key = $(this).index();
            slide.eq(key).fadeIn(200).siblings().fadeOut(100);

            item.eq(key).addClass('f_on').siblings().removeClass('f_on');

            
            if (key == slideCount - 1) {
                idx = -1;
            } else {
                idx = key;
            }

        });
    
}); 


