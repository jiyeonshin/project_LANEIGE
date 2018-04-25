                 $(document).ready(function () {
                     $('.gnb_all li').mouseenter(function () {


                         $(this).find('.dep2wrap').fadeIn(300, function () {


                             $(this).mouseleave(function () {

                                 $(this).fadeOut(300);

                             });
                         });

                     });
                     $('.gnb_all li').mouseleave(function () {
                         $(this).find('.dep2wrap').fadeOut(300);
                     });
                 });
