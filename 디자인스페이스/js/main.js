$(function(){
    // header fix
    $("header").each(function(){
        var win = $(window)

        var header = $(this)

        var hot = header.offset().top;

        console.log(hot);

        win.scroll(function(){
            if(win.scrollTop()>hot){
                header.addClass("fix");
            }else{
                header.removeClass("fix");
            }
        });

        win.trigger("scroll");
    })

     // sec1 slide
     let idx = 0;

     setInterval(function(){
         if(idx<2){
             idx++;
         }else{
             idx = 0;
         }
     
         let slideposition = idx * (-1920)+"px";
     
         $(".slidelist").animate({left:slideposition},500);
     },2000);

    //  topbtn
    $(".topbtn").each(function(){
        $(this).click(function(){
            $(window).scrollTop(0);
        })
    })

    // sec06 slide btn
    $(".sec06 .next").click(function(){
        $(".sec06 .item").last().prependTo(".sec06 .deco")
    })

    $(".sec06 .prev").click(function(){
        $(".sec06 .item").first().appendTo(".sec06 .deco")
    })

    // auto trigger
    setInterval(function(){
        $(".sec06 .next").trigger("click")
    },5000)

});