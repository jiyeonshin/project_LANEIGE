 var animationSpeed =700;
            var pause = 4000;
            var currentSlide = 1;

            var $slider = $('.UISlider_item');
            var $slideContainer = $slider.find('.slides');
            var $slides = $slideContainer.find('.UISlider_box');
            var width = $slides.width();
        
        
        $(function() {

            /*자동 슬라이드 구현 시작*/
           


        setInterval(function(){
            
                            $slideContainer.animate({'margin-left':'-='+width},animationSpeed,function(){
                               currentSlide++;
                                if(currentSlide === $slides.length){
                                    currentSlide=1;
                                    $slideContainer.css('margin-left',0);
                                }
                            });
                            }, pause);
                        
                      
        });
        
        /*자동 슬라이드 구현 끝*/
        
        /*화살표 버튼 누르면 이전화면 다음화면 나오기 구현*/
        $(function() {

                $('.leftArrow').on('click', function() {

                    console.log('click');
                    $('.slides').animate({left: '0%'}, 300, function() {
                        $('.slides').css('left', '-='+width);
                        $('.UISlider_box').first().before($('.UISlider_box').last());
                    });
                });
            
            
                            $('.rightArrow').on('click', function() {

                    
                    $('.slides').animate({left: '-200%'}, 300, function() {
                        $('.slides').css('left', '+='+width);
                        console.log(width);
                        $('.UISlider_box').last().after($('.UISlider_box').first());
                    });
                });
            });
        /*화살표 버튼 누르면 이전화면 다음화면 나오기 구현*/
        