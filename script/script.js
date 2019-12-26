$(document).ready(function() {

    let $images = $('.slider_img');

    let $page = $('.page');


    setInterval(function () {

        let $active_image = $images.filter('.active_img').first();

        let $next_image = $active_image.next();

        if($next_image.length == 0) {

            $images.first().addClass('active_img');

        }



        $active_image.removeClass('active_img');

        $next_image.addClass('active_img');




        let $active_page = $page.filter('.page_active').first();

        let $next_page = $active_page.next();

        if($next_page.length == 0) {

            $page.first().addClass('page_active');

        }


        $active_page.removeClass('page_active');

        $next_page.addClass('page_active');



    }, 5000);
    
});