function displayExpandButton() {}
function hideExpandButton() {}

function expandInfo(elem) {
    /* Search for and unhide section-hidden-text: */
    $(elem).children('.section-hidden-text').slideDown();
}

function retractInfo(elem) {
    $(elem).children('.section-hidden-text').slideUp();
}

$(document).ready( function() {
    $(".info-section").click(function(ev) {
        if($(this).data("toggle")) {
            $(this).data("toggle", false);
            retractInfo(this);
        } else {
            $(this).data("toggle", true);
            expandInfo(this);
        }
    })
})
