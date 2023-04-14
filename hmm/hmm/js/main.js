$(function () {
    $('#fullpage').fullpage({
        //options here
        anchor: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
        autoScrolling: true,
        scrollHorizontally: true,
        afterLoad: function (anchorLink, idx) {
            console.log("현재섹션은" + idx);
            if (idx == 1) {
                $(".logo").children().eq(0).addClass("on")
                $(".logo").children().eq(1).removeClass("on")

                $(".menu li a").css({ color: "#fff" })
                $(".menu li a").hover(function () {
                    $(this).removeClass("ss");
                });
                $("header").removeClass("change");
            } if (idx == 2) {
                $(".logo img:nth-child(2)").addClass("on")
                $(".logo img:nth-child(1)").removeClass("on")
                // 글씨
                $(".menu li a").css({ color: "#0C205C" })
                $(".menu li a").hover(function () {
                    $(this).addClass("ss");
                })
                $("header").addClass("change");
            } if (idx == 3) {
                // logo 이미지
                $(".logo img:nth-child(1)").addClass("on")
                $(".logo img:nth-child(2)").removeClass("on")
                // 글씨
                $(".menu li a").css({ color: "#fff" })
                $(".menu li a").hover(function () {
                    $(this).removeClass("ss");
                })
                $("header").removeClass("change");
            } if(idx == 4) {
                $(".logo").children().eq(0).addClass("on")
                $(".logo").children().eq(1).removeClass("on")
                $(".menu li a").css({ color: "#fff" })
                $(".menu li a").hover(function () {
                    $(this).removeClass("ss");
                })
                $("header").removeClass("change");
            } if (idx == 5) {
                $("header").css({ opacity: "1" })
            } if(idx == 6){
                $("header").css({ opacity: "0" })
            }
        }

    });

    $(".slide_wrap").children("div:gt(0)").hide();

    let idx = 0;

    setInterval(function () {
        let next = (idx + 1) % 5;

        $(".slide_wrap").find("div").eq(idx).fadeOut();
        $(".slide_wrap").find("div").eq(next).fadeIn();

        idx = next;
    }, 3000);

    // text color change

    let $list = $(".swipe_container"),
        $first = $list.find("div").first()
            .css({ color: "#0047D5" });
    $last = $list.find("div").not($first)
        .css({ color: "#E3E3E3" });
    let color = 0;

    setInterval(function () {
        let change = (color + 1) % 5;

        $(".swipe_container").find("div").eq(color).css({ color: "#E3E3E3" });
        $(".swipe_container").find("div").eq(change).css({ color: "#0047D5" });

        color = change;

    }, 3000);

    // 모바일 햄버거 메뉴
    $(".m-menu").click(function (ev) {
        ev.preventDefault();
        $(this).toggleClass("move1")
        $(".m-page1").toggleClass("move")
    })
})