$(document).ready(function () {
    $('.menu-toggle').on('click', function() {
        $('.nav-menu').toggle('slow');
    })
});

$(document).ready(function() {
    var card = $("#myCard");
    card.on("click", function() {
        if ($(this).hasClass("flipped")) {
            $(this).removeClass("flipped");
        } else {
            $(this).addClass("flipped");
        }
    });
});