/*
    HERO-SLIDER.JS - Last updated: 24.08.18
*/
//-----------------------------------------------------------------
// LAUNCH SLIDER
//-----------------------------------------------------------------

/*
function launchSlider() {
    $('[data-hero-slider]').each(function() {

        var $this       = $(this);
        var $slider     = $('.lv-hero-item-slider', $this);
        // var $captions   = $('.lv-hero-item-caption', $this);
        var slideCount  = $('.lv-hero-item', $slider).length;
        var $prevArrow  = $('.lv-hero-slider-prev-btn', $this);
        var $nextArrow  = $('.lv-hero-slider-next-btn', $this);

        //==================================================
        // CHECK FOR SLIDES
        //==================================================

        if (slideCount > 1) {

            //==================================================
            // ARROWS
            // https://github.com/metafizzy/flickity-docs/issues/5#issuecomment-78370765
            //==================================================

            $prevArrow.on('click', function() {
                $slider.flickity('previous').flickity('stopPlayer');
            });

            $nextArrow.on('click', function() {
                $slider.flickity('next').flickity('stopPlayer');
            });

            //==================================================
            // RE-TRIGGER CSS TRANSITIONS
            //==================================================

            // $slider.on('ready.flickity change.flickity', function() {
                // if ($(window).width() > 576) {
                    // $captions.hide();

                    // setTimeout(function(){
                        // $captions.show();
                    // }, 500);
                // }
            // })
        }
    //--
    });
}

launchSlider();
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================