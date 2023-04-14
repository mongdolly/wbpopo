
$(function () {
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

})