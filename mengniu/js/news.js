let flag=4;
let banneritem=$('.banner_item');
banneritem.on('mouseenter',function () {
    let titlewrap=$('.title_wrap',this);
    let em=$('em',this);
    titlewrap.animate({bottom:'10px'});
    em.animate({left:'0',right:'0',top:'0'});
});
banneritem.on('mouseleave',function () {
    let titlewrap=$('.title_wrap',this);
    let em=$('em',this);
    titlewrap.animate({bottom:'56px'});
    em.animate({left:'-60px',right:'-60px',top:'-170px'});
    titlewrap.finish();
    em.finish();
});