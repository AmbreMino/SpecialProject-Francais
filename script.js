jQuery(function() {
    jQuery(".sidenav").append('<div class="slide-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>');

    jQuery(".slide-arrow").click(function() {
        jQuery(".sidenav").toggleClass("open");
    });
});
