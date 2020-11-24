(function($){

    
    $().ready(function() {
        
        let accordions = $('.cwp_accordion_wrapper');

        accordions.each(function() {

            let title = $(this).find('.cwp_title_wrapper');
            let content = $(this).find('.cwp_content_wrapper');

            title.click(function() {
                
                content.toggleClass('cwp_display');
                
            });

        });

    });

})(jQuery)