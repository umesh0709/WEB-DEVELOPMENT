// JavaScript source code

//NEWS SECTION SLIDER

var scrollDuration = 300;

var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');

var boxLength = $('.news-box').length;
var boxSize = $('.news-box').outerWidth(true);

var paddleMargin = 100;

var getNewsWrapperSize = function () {
    return $('.news-wrapper').outerWidth();
}

var newsWrapperSize = getNewsWrapperSize();

$(window).on('resize', function () {
    newsWrapperSize = getNewsWrapperSize();
});


var newsVisibleSize = newsWrapperSize;

var getNewsSize = function () {
    return boxLength * boxSize;
};

var newsSize = getNewsSize();

var newsInvisibleSize = newsSize - newsWrapperSize;

var getNewsPosition = function () {
    return $('.news').scrollLeft();
};


$('.news').on('scroll', function () {

    newsInvisibleSize = newsSize - newsWrapperSize;

    var newsPosition = getNewsPosition();

    var newsEndOffset = newsInvisibleSize - paddleMargin;

    if (newsPosition <= paddleMargin) {
        $(leftPaddle).addClass('hidden');
        $(rightPaddle).removeClass('hidden');
    }
    else if (newsPosition < newsEndOffset) {
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).removeClass('hidden');
    }
    else if (newsPosition >= newsEndOffset) {
        $(leftPaddle).removeClass('hidden');
        $(rightPaddle).addClass('hidden');
    }

    $('#print-wrapper-size span').text(newsWrapperSize);
    $('#print-menu-size span').text(newsSize);
    $('#print-menu-invisible-size span').text(newsInvisibleSize);
    $('#print-menu-position span').text(newsPosition);

});

$(rightPaddle).on('click', function () {
    $('.news').animate({ scrollLeft: 400 }, scrollDuration);

});

$(leftPaddle).on('click', function () {
    $('.news').animate({ scrollLeft: '0' }, scrollDuration);
});
