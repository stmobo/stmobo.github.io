function expandInfo(elem) {
    $(elem).children('.section-expand-hint').slideUp();
    $(elem).children('.section-hidden-text').slideDown();
}

function retractInfo(elem) {
    $(elem).children('.section-expand-hint').slideDown();
    $(elem).children('.section-hidden-text').slideUp();
}

$(document).ready( function() {
    /* Create "Expand..." hint: */
    expandHint = $("<em>Expand</em>").addClass('section-text section-expand-hint');

    $(".expandable-section").append(expandHint);

    $(".expandable-section").mouseenter(function(ev) {
        $(this).children('.section-expand-hint').css('text-decoration', 'underline');
    });

    $(".expandable-section").mouseleave(function(ev) {
        $(this).children('.section-expand-hint').css('text-decoration', 'none');
    });

    $(".expandable-section").click(function(ev) {
        if($(this).data("toggle")) {
            $(this).data("toggle", false);
            retractInfo(this);
        } else {
            $(this).data("toggle", true);
            expandInfo(this);
        }
    })
})
