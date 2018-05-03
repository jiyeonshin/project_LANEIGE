$(document).ready(function(e){
        var item = $('.gnb_kv>.gnb_btn>ul>li');
        var bts_item=$('.bst_gnb>.gnb_btn>ul>li');
        var event_item_left=$('.event_gnb_left>.event_btn>ul>li');
        var event_item_right=$('.event_gnb_right>.event_btn>ul>li');
    
        var slide = $('.UISlider_item>ul>li');
        var bts_slide =$('.bst_slider>ul>li');
        var event_slide=$('.event_item>ul>li');
        var event_slide_left=$('.event_content>ul>li');
    
        var slideCount = $('.UISlider_item>ul>li').length;
        var bts_slide_Count =$('.bst_slider>ul>li').length;
        var event_slide_Count=$('.event_item>ul>li').length;
    
        var leftArrow = $('.arrow_kv>.leftArrow');
        var rightArrow = $('.arrow_kv>.rightArrow');
    
        var bts_leftArrow = $('.bst_arrow>.leftArrow');
        var bts_rightArrow = $('.bst_arrow>.rightArrow');
    
        var play = $('.play_btn>.play');
        var stop =$('.play_btn>.stop');
    
        var idx = 0;
        var bts_idx=0;
        var event_idx=0;
    
    item.addClass('off');
    bts_item.addClass('off');
    event_item_left.addClass('off');
    event_item_right.addClass('off');

    /*첫번째 메인 슬라이드*/
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
    
    
    /*베스트셀러 슬라이드*/
    
    function bts_fadeAuto(e) {
            bts_idx++;
            bts_slide.eq(bts_idx).fadeIn().siblings().fadeOut(400);
            bts_item.eq(bts_idx).addClass('on').siblings().addClass('off').removeClass('on');

        console.log(bts_idx);
            if (bts_idx > bts_slide_Count - 2) {
                bts_idx = -1;
            }

        }

        var setin = setInterval(bts_fadeAuto, 3000);

        bts_item.hover(
            function(e) {
                clearInterval(setin);
            },
            function(e) {
                setin = setInterval(bts_fadeAuto, 3000);
            }
        );

    
    bts_item.on('click', function(e) {


            var key = $(this).index();
            bts_slide.eq(key).fadeIn(200).siblings().fadeOut(100);

            bts_item.eq(key).addClass('on').siblings().removeClass('on');

            
            if (key == bts_slide_Count - 1) {
                bts_idx = -1;
            } else {
                bts_idx = key;
            }

        });
    
    bts_leftArrow.on('click',function(e){
        
           bts_idx--;
            bts_slide.eq(bts_idx).fadeIn(300).siblings().fadeOut(200);
            
            bts_item.eq(bts_idx).addClass('on').siblings().removeClass('on');
            
            if(bts_idx==0){
                bts_idx=bts_slide_Count;
            }else{
                bts_idx=bts_idx;
            }
        
        });
        
        bts_rightArrow.on('click',function(e){
            
           bts_idx++;
            bts_slide.eq(bts_idx).fadeIn(300).siblings().fadeOut(200);
            
            bts_item.eq(bts_idx).addClass('on').siblings().removeClass('on');
            
            if(bts_idx>bts_slide_Count-2){
                bts_idx=-1;
            }
        
        });
    
    
    /*이벤트 슬라이드 오른쪽*/
    function event_fadeAuto(e) {
            event_idx++;
            event_slide.eq(idx).fadeIn().siblings().fadeOut(400);
            event_item_right.eq(idx).addClass('on').siblings().addClass('off').removeClass('on');

            if (event_idx > event_slide_Count - 2) {
                event_idx = -1;
            }

        }

        var setin = setInterval(event_fadeAuto, 3000);

        item.hover(
            function(e) {
                clearInterval(setin);
            },
            function(e) {
                setin = setInterval(event_fadeAuto, 3000);
            }
        );

    
        event_item_right.on('click', function(e) {


            var key = $(this).index();
            event_slide.eq(key).fadeIn(200).siblings().fadeOut(100);

            event_item_right.eq(key).addClass('on').siblings().removeClass('on');

            
            if (key == event_slide_Count - 1) {
                event_idx = -1;
            } else {
                event_idx = key;
            }

        });
    
    /*이벤트 슬라이드 왼쪽*/
    function event_fadeAuto_left(e) {
            event_idx++;
            event_slide_left.eq(idx).fadeIn().siblings().fadeOut(400);
            event_item_left.eq(idx).addClass('on').siblings().addClass('off').removeClass('on');

            if (event_idx > event_slide_Count - 2) {
                event_idx = -1;
            }

        }

        var setin = setInterval(event_fadeAuto_left, 3000);

        item.hover(
            function(e) {
                clearInterval(setin);
            },
            function(e) {
                setin = setInterval(event_fadeAuto_left, 3000);
            }
        );

    
        event_item_left.on('click', function(e) {


            var key = $(this).index();
            event_slide_left.eq(key).fadeIn(200).siblings().fadeOut(100);

            event_item_left.eq(key).addClass('on').siblings().removeClass('on');

            
            if (key == event_slide_Count - 1) {
                event_idx = -1;
            } else {
                event_idx = key;
            }

        });
}); 

