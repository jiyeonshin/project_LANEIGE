$(document).ready(function(e){
    var item = $('.gnb_kv>.gnb_btn>ul>li');
        var slide = $('.UISlider_item>ul>li');
        var slideCount = $('.UISlider_item>ul>li').length;
        var leftArrow = $('.arrow_kv>.leftArrow');
        var rightArrow = $('.arrow_kv>.rightArrow');
        var play = $('.play_btn>.play');
        var stop =$('.play_btn>.stop');
        var idx = 0;
    
    item.addClass('off');

        function fadeAuto(e) {
            idx++;
            slide.eq(idx).fadeIn().siblings().fadeOut(400);
            item.eq(idx).addClass('on').siblings().addClass('off').removeClass('on');

            if (idx > slideCount - 2) {
                idx = -1;
            }

        }

        var setin = setInterval(fadeAuto, 3000);

        item.hover(
            function(e) {
                clearInterval(setin);
            },
            function(e) {
                setin = setInterval(fadeAuto, 3000);
            }
        );

        item.on('click', function(e) {


            var key = $(this).index();
            slide.eq(key).fadeIn(200).siblings().fadeOut(100);

            item.eq(key).addClass('on').siblings().removeClass('on');

            
            if (key == slideCount - 1) {
                idx = -1;
            } else {
                idx = key;
            }

        });
        
        leftArrow.on('click',function(e){
        
           idx--;
            slide.eq(idx).fadeIn(300).siblings().fadeOut(200);
            
            item.eq(idx).addClass('on').siblings().removeClass('on');
            
            if(idx==0){
                idx=slideCount;
            }else{
                idx=idx;
            }
        
        });
        
        rightArrow.on('click',function(e){
            
           idx++;
            slide.eq(idx).fadeIn(300).siblings().fadeOut(200);
            
            item.eq(idx).addClass('on').siblings().removeClass('on');
            
            if(idx>slideCount-2){
                idx=-1;
            }
        
        });
        
        play.on('click',function(e){
            setin = setInterval(fadeAuto, 3000);
            play.css('display','none');
            stop.css('display','block');
        });
        
        stop.on('click',function(e){
            stop.css('display','none');
            play.css('display','block');
            clearInterval(setin);
        });
    
}); 

