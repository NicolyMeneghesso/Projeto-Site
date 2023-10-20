$(document).ready(function () {
    $('.menu-toggle').on('click', function() {
        $('.nav-menu').toggle('slow');
    })
});

function flipCard(element) {
    const innerCard = element.querySelector('.flip-card-inner');
    if (innerCard.style.transform === 'rotateY(180deg)') {
        innerCard.style.transform = 'rotateY(0deg)';
    } else {
        innerCard.style.transform = 'rotateY(180deg)';
    }
}



