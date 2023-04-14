$(document).ready(function(){
    let s_width = 0;
    let s_height = 0;

    function tmp() {
        let con_width = $('.design').outerWidth() * $('.design li').length;

        $('.design').css({
            width: con_width,
            height : 'auto'
        })

        $('.design li').css({
            width: con_width/ $('.design li').length,
            height: 'auto'
        })

        let w_width =$(window).width();
        let w_height = $(window).height();

        s_width = con_width - w_width;
        s_height = $('body').height() - w_height

    }
    tmp();

    let array = [];
            for(let i=0; i<$('.design li').length; i++) {
                array[i] = $('.design li').eq(i).offset().left
            }

            let chk = true;
            $('.design li').on('mousewheel DOMMouseScroll', function(){

                if(chk) {
                    // 휠 일정시간동안 막기
                    chk = false;
                    setTimeout(function(){
                        chk = true;
                    }, 500)

                    // 휠 방향 감지(아래: -120, 위: 120)
                    let w_delta = event.wheelDelta / 120;
                    
                    // 휠 아래로
                    if(w_delta < 0 && $(this).next().length > 0) {
                        $('.design').animate({
                            left: -array[$(this).index()+1]
                        }, 500)
                    }
                    // 휠 위로
                    else if(w_delta > 0 && $(this).prev().length > 0) {
                        $('.design').animate({
                            left: -array[$(this).index()-1]
                        }, 500)
                    }
                }
            });

			//브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
            $(window).resize(function(){
                for(let i=0; i<$('.design li').length; i++) {
                    array[i] = $('.design li').eq(i).offset().left
                }

                tmp();
            })
})