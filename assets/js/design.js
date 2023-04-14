const cont_2 = document.getElementById('cont_2');
const slider = document.getElementById('slider');
const s_wid = slider.offsetWidth;
const s_li = slider.children;
const indi_bar = document.getElementById('indi_bar');
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;
let li_pos = 0;
let pct = 0;


cont_2.addEventListener('wheel',function(e){
    e.preventDefault();
    move_slider(e.deltaY);
    on_indicator();
    return;
});

function move_slider(amount){
    s_pos -= amount;
    if(s_pos < s_move_max){
        s_pos = s_move_max;
        return;
    }else if(s_pos > 0){
        s_pos = 0;
        return;
    }
    slider.style.transform = `translateX(${s_pos}px)`;
    li_upDown(amount);
    
}

function li_upDown(amount){
    li_pos += amount;
    for(let i=0; i<s_li.length; i++){
        if(i%2 != 0){
            s_li[i].style.transform = `translateY(${li_pos / (i*5)}px)`;
        }else{
            s_li[i].style.transform = `translateY(${-li_pos / (i*5)}px)`;
        }
    }
}
