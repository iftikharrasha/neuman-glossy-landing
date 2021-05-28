/********* sticky header ********/
$(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
        $("header").addClass("stick");
    } else {
        $("header").removeClass("stick");
    }
});