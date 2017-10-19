$(function () {
    // 产生扑克
    let color=['h','s','d','c'];
    let poke=[];
    let flag={};
    for(let i=0;i<52;i++){
        while(poke.length<52){
            let hua=color[Math.floor(Math.random()*color.length)];
            let num=Math.floor(Math.random()*13+1);
            if(!flag[`${hua}_${num}`]){
                poke.push({hua,num});
                flag[`${hua}_${num}`]=true;
            }
        }
    }
    let index=0;
    for(let i=0;i<7;i++){
        for(let j=0;j<=i;j++){
            let left=400-55*i+110*j,
                top=50*i;
            $('<div>').addClass('poke').attr("id",`${i}_${j}`).data('num',poke[index].num).css('background-image',`url("img/${poke[index].num}${poke[index].hua}.jpg")`).appendTo('.desk').delay(index*15).animate({left,top,opacity:1});
            index++;
        }
    }
    for(;index<poke.length;index++){
        $('<div>').addClass('poke zuo').attr("id",`${-2}_${-2}`).data('num',poke[index].num).css('background-image',`url("img/${poke[index].num}${poke[index].hua}.jpg")`).appendTo('.desk').delay(index*15).animate({left:200,top:450,opacity:1})
    }
    let first=null;
    $('.desk').on('click','.poke',function (e) {
        let element=$(e.target);
        let ids=element.attr('id').split('_');
        let ele1=`#${ids[0]*1+1}_${ids[1]*1}`;
        let ele2=`#${ids[0]*1+1}_${ids[1]*1+1}`;
        if($(ele1).length||$(ele2).length){
            return;
        }
        element.toggleClass('active');
        if(element.hasClass('active')){
            element.animate({top:'-=20'})
        }else {
            element.animate({top:'+=20'})
        }
        if(!first){
            first=$(e.target);
        }else {
            if(first.data('num')+element.data('num')==13||first.data('num')==13){
                $('.active').animate({top:0,left:800},function () {
                    $(this).remove();
                    first=null;
                })
            }else {
                $('.active').animate({top:'+=20'},function () {
                    $(this).removeClass('active')
                });
                first=null;
            }
        }
    });
    let zIndex=0;
    $('.btnToR').on('click',function () {
        if(!$('.zuo').length){return;}
        $('.zuo').eq(-1).css({zIndex:index++}).animate({left:600}).removeClass('zuo').addClass('you');
    });
    $('.btnToL').on('click',function () {
        if(!$('.you').length){return;}
        $('.you').each(function (index) {
            $(this).delay(index*100).animate({left:200}).css({'zIndex':zIndex++}).removeClass('you').addClass('zuo');
        })
    })
});