const $page1 = $('.page--1');

const $text1 = $('.text--1');
const $text2 = $('.text--2');
const $text3 = $('.text--3');
const $text4 = $('.text--4');
const $text5 = $('.text--5');

const $part1 = $('.part--1');
const $part2 = $('.part--2');
const $part3 = $('.part--3');
const $part4 = $('.part--4');

window.addEventListener('scroll', function () {
    const offsetPercent = Math.floor(this.scrollY * 100 / this.innerHeight) / 2;
    const percentOfAnimation = offsetPercent > 100 ? 100 : offsetPercent;

    setBackgroundPosition(percentOfAnimation);
    moveBlock($text1, 10, percentOfAnimation);
    moveBlock($text2, -20, percentOfAnimation);
    moveBlock($text3, 5, percentOfAnimation);
    moveBlock($text4, -5, percentOfAnimation);
    moveBlock($text5, -50, percentOfAnimation);

    moveBlock($part1, -15, percentOfAnimation);
    moveBlock($part2, -35, percentOfAnimation);
    moveBlock($part3, -10, percentOfAnimation);
    moveBlock($part4, -20, percentOfAnimation);
});

const setBackgroundPosition = (percentOfAnimation) => {
    $page1.css({
        width: `${100 - percentOfAnimation}%`
    });
}

const moveBlock = ($textBlock, distance, percentOfAnimation) => {
    $textBlock.css ({
        transform: `translatex(${distance * percentOfAnimation / 100}vw)`
    });
}

