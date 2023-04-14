window.addEventListener("wheel",function(e){
e.preventDefault();
},{passive : false});

let $html =$("html");

    page = 1;

    lastpage = $(".section").length;

    $html.animate({scrollTop:0},10);


$(window).on("wheel",function(e){

    console.log(page,lastpage)
    // if($html.is(':animated')) return;

    if(e.originalEvent.daltaY > 0){
        if(page == lastpage) return;

        page++;
    }else if(e.originalEvent.daltaY < 0){
        if(page == 1)return;

        page--;
    }

    let posTop = (page - 1) * $(window).height();

    $html.animate({scrollTop : posTop});
})