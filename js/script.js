$('.mobile-btn').on('click',function () {
    $('.mobile-btn').toggleClass('show');
    $('.menu').toggleClass('show-menu');
});
$('.menu-list-item').on('click',function () {
    $('.mobile-btn').removeClass('show');
    $('.menu').removeClass('show-menu');
});