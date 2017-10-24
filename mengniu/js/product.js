let flag=2;
$('.banner_item_mask_1').on('mouseenter',function () {
    $(this).animate({backgroundSize:'68%'});
    $('em',this).animate({backgroundSize:'85%'});
});
$('.banner_item_mask_1').on('mouseleave',function () {
    $(this).animate({backgroundSize:'63%'});
    $('em',this).animate({backgroundSize:'100%'});
    $(this).finish();
    $('em',this).finish();
});

$('.banner_item_mask_2').on('mouseenter',function () {
    $(this).animate({backgroundSize:'140%'});
    $('em',this).animate({backgroundSize:'85%'});
});
$('.banner_item_mask_2').on('mouseleave',function () {
    $(this).animate({backgroundSize:'130%'});
    $('em',this).animate({backgroundSize:'100%'});
    $(this).finish();
    $('em',this).finish();
});
