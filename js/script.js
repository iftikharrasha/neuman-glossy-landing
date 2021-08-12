/********* sticky header ********/
$(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
        $("header").addClass("stick");
    } else {
        $("header").removeClass("stick");
    }
});

//smooth scroll
const r = rolly({
    view: document.querySelector('.app'),
    native: true,
});
r.init();