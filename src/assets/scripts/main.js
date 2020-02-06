/*
    MAIN.JS - Last updated: 03.07.19
*/
//-----------------------------------------------------------------
// ON READY
//-----------------------------------------------------------------

$(function () {

    // Parallax
    // $.Scrollax();

    // Tooltips
    // $('[data-toggle="tooltip"]').tooltip();

    // Flatpickr
    // $('.datepicker').flatpickr({
    //         format: "Y-m-d", // 2018-12-18
    //         altFormat: "d M Y", // 06 Dec 2018 etc
    //         altInput: true
    //     }
    // );
});

//-----------------------------------------------------------------
// EQUAL HEIGHT
//-----------------------------------------------------------------

$('[data-equal-height]').matchHeight(
 {
     byRow: false,
     property: 'height',
     target: null,
     remove: false,
     mq: "(min-width: 768px)"
 });

//-----------------------------------------------------------------
// SCROLL-TO (NEW) - JULY 2019
// Exclude empty links, sitemap and tabs
//-----------------------------------------------------------------

$('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])')
    .on('click', function() {
        var id = $(this).attr('href');
        var endPos = $(id);
        var headerHeight = $('.global-header').height();

        if (endPos.length) {
            $.scrollTo(endPos.offset().top - headerHeight, 800);
            return false; // don't show hash link in url
        }
    }
);

//-----------------------------------------------------------------
// SITEMAP TRIGGER - JULY 2019
//-----------------------------------------------------------------

if ($('a[href="#sitemap"]').length) {
    $('[data-sitemap-trigger]').on('click', function(event){
        event.preventDefault();
        $('.fa', $(this)).toggleClass('active');
        $('[data-sitemap]').toggleClass('is-collapsed');

        var id = $(this).attr('href');
        var endPos = $(id);

        setTimeout(function(){
            $.scrollTo(endPos.offset().top, 400);
        }, 300);
    });
}

//-----------------------------------------------------------------
// SCROLL TOP
//-----------------------------------------------------------------

$('[data-back-top]').click(function() {
    $.scrollTo(0, 500);
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================