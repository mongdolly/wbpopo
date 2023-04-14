$(function(){
    // color change
    $(".select-1").click(function(){
        $(".info-1 .right img").last().prependTo(".info-1 .right")
    })

    $(".select-2").click(function(){
        $(".info-1 .right img").first().appendTo(".info-1 .right")
    })
})