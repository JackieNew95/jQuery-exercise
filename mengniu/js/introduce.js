let flag=1;

$('.view_more').on('click',function () {
    let viewmore=$('.view_more');
    viewmore.parent().prev().toggleClass('has_view_more');
    viewmore.next().toggleClass('displaynone');
    viewmore.toggleClass('displaynone');
});
$('.close').on('click',function () {
    let viewmore=$('.close');
    viewmore.parent().prev().toggleClass('has_view_more');
    viewmore.prev().toggleClass('displaynone');
    viewmore.toggleClass('displaynone');
    $('body').animate({scrollTop:'250px'});
});