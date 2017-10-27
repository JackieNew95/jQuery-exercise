let flag=3;
let banneritem=$('.banner_item');
let pos=banneritem.width()/20;
banneritem.find('i').css({backgroundPositionX:`${pos*10}px`});
banneritem.on('mouseenter',function () {
    $(this).css({flexGrow:1});
    banneritem.not(this).css({width:'22%'});
    banneritem.not(this).find('i').css({backgroundPositionX:`${pos*8}px`});
    $('i',this).css({backgroundPositionX:`${pos*17}px`,backgroundSize:'contain'});
});
banneritem.on('mouseleave',function () {
    banneritem.css({flexGrow:0}).css({width:'25%'});
    $('i',banneritem).css({backgroundPositionX:`${pos*10}px`,backgroundSize:'cover'});
});
