/*
    LIGHTBOX.JS - Last updated: 30.05.18
*/
//-----------------------------------------------------------------
// LAUNCH SLIDER
//
// https://stackoverflow.com/questions/22792184/how-can-i-get-magnific-popup-to-show-both-images-and-an-iframe-video-in-one-dyna/30475784?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
// TODO: https://stackoverflow.com/questions/17612258/title-for-iframe-video-in-magnific-popup?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
//-----------------------------------------------------------------

function launchGallery() {
    $('[data-lightbox-group]').each(function() {
        var $this = $(this);
        var groupTitle = $this.attr('data-lightbox-group');

        $this.magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            //removalDelay: 160,
            //preloader: false,
            //fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return '<div class="mb-1">' + item.el.attr('title') + '</div><small>'+groupTitle+'</small>';
                }
            },
            //
            callbacks: {
                elementParse: function(item) {
                    var iframe = item.src.indexOf('youtube') != -1 ||
                                   item.src.indexOf('vimeo') != -1 ||
                                   item.src.indexOf('maps') != -1;

                    if (iframe) {
                        item.type = 'iframe';
                    }
                }
            }
        })
    })
}

launchGallery();

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================