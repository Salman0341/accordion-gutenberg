(function($){
    $().ready(function() {
        let accordions = $('.cwp_accordion_wrapper');
        accordions.each(function() {
            const openOneAtTime = $(this).data('open');
            let title = $(this).find('.cwp_title_wrapper');
            let content = $(this).find('.cwp_content_wrapper');
            let icon = $(this).find('.dashicons');
            
            if(!openOneAtTime) {
                title.each(function( index ) {
                    $(this).click(function() {
                        icon.eq(index).toggleClass('dashicons-plus dashicons-minus');
                        content.eq(index).toggleClass("cwp_display");
                    });
                })
            }

            if(openOneAtTime) {
                title.each(function(index) {
                  $(this).click(function() {
                    icon.removeClass('dashicons-minus').addClass('dashicons-plus');
                    icon.eq(index).removeClass('dashicons-plus').addClass('dashicons-minus');
                    content.removeClass('accordion_open');
                    content.eq(index).addClass('accordion_open');
                  })
                }) 
            }
        });

    });

})(jQuery)