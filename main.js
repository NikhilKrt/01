
function selector(s){
    return document.querySelector(s)
}

$(document).ready(function () {
    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop:0
        },1000);
    });

    AOS.init({
        easing:'ease',
        duration:1800,
        once:true
    });
});