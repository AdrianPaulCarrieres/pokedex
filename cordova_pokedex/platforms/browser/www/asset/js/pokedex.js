// BEGIN: toTheTop

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // document.getElementById("toTheTop").style.display = "block";
        $('#toTheTop').fadeIn();
    } else {
        // document.getElementById("toTheTop").style.display = "none";
        $('#toTheTop').fadeOut();
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function() {
    // scroll body to 0px on click
    $('#toTheTop').click(function () {
        $('#toTheTop').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#toTheTop').tooltip('show');
});
// END: toTheTop
