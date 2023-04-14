$(function(){
    // // header
    const header = document.querySelector("header");

    const headerHeight = header.getBoundingClientRect().height;

    window.addEventListener("scroll",function(){
        if(window.scrollY > headerHeight) {
            header.setAttribute("style","background-color: #0C205C;");
        }
        else{
            header.setAttribute("style","background-color: none;")
        }
    });

    // 모바일 햄버거 메뉴
    $(".m-menu").click(function (ev) {
        ev.preventDefault();
        $(this).toggleClass("move1")
        $(".m-page1").toggleClass("move")
    })

    // tab menu
    if($(".m1").hasClass("active") === true) {

        $(".m2").on("click",function(){
            $(this).addClass("active");
            $(".m1").removeClass("active");
            $(".m3").removeClass("active");

            $(".tab02").addClass("on");
            $(".tab01").removeClass("on");
            $(".tab03").removeClass("on");
        })
        $(".m3").on("click",function(){
            $(this).addClass("active");
            $(".m1").removeClass("active");
            $(".m2").removeClass("active");

            $(".tab03").addClass("on");
            $(".tab01").removeClass("on");
            $(".tab02").removeClass("on");
        })
        $(".m1").on("click",function(){
            $(this).addClass("active");
            $(".m2").removeClass("active");
            $(".m3").removeClass("active");

            $(".tab01").addClass("on");
            $(".tab02").removeClass("on");
            $(".tab03").removeClass("on");
        })
    }
})