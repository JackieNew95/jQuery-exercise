let flag=1;//哪个页面
let watercolumn=$('.water_column');
let aboutbgcolor=['#F39E38','#EB6B64','#71BDE4','#81C043'];

watercolumn.on('mouseenter',function () {
    watercolumn.css({width:'24%'});
    $(this).css({flexGrow:1}).animate({width:'28%'});
    $(this).find('a').animate({bottom:'31%'});
    let index=(watercolumn.find('span')).index($(this).find('span'));
    $(this).find('span').css({background:'#ffffff',color:aboutbgcolor[index]});
});
watercolumn.on('mouseleave',function () {
    watercolumn.css({width:'25%'});
    $(this).find('a').animate({bottom:'19%'});
    watercolumn.filter(this).finish();
    watercolumn.filter(this).find('a').finish();
    $(this).find('span').css({background:'transparent',color:'#ffffff'});
});
watercolumn.find('a').each(function (index,element) {
    $(element).delay(index*300).animate({bottom:'25%'}).animate({bottom:'19%'},'fast')
});
