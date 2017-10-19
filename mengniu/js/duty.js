let flag=3;
let banneritem=$('.banner_item');
banneritem.on('mouseenter',function () {
    $(this).css({flexGrow:1});
    banneritem.not(this).css({width:'22%'});
    $('i',this).css({right:'-15%'});
});
banneritem.on('mouseleave',function () {
    banneritem.css({flexGrow:0,width:'25%'});
    $('i',this).css({right:'0'});
});
