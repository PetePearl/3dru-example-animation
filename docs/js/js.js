"use strict";

var $page1 = $('.page--1');
var $text1 = $('.text--1');
var $text2 = $('.text--2');
var $text3 = $('.text--3');
var $text4 = $('.text--4');
var $text5 = $('.text--5');
var $part1 = $('.part--1');
var $part2 = $('.part--2');
var $part3 = $('.part--3');
var $part4 = $('.part--4');
window.addEventListener('scroll', function () {
  var offsetPercent = Math.floor(this.scrollY * 100 / this.innerHeight) / 2;
  var percentOfAnimation = offsetPercent > 100 ? 100 : offsetPercent;
  setBackgroundPosition(percentOfAnimation);
  moveText($text1, 10, percentOfAnimation);
  moveText($text2, -20, percentOfAnimation);
  moveText($text3, 25, percentOfAnimation);
  moveText($text4, -5, percentOfAnimation);
  moveText($text5, -40, percentOfAnimation);
  moveBlock($part1, -15, percentOfAnimation);
  moveBlock($part2, -35, percentOfAnimation);
  moveBlock($part3, -10, percentOfAnimation);
  moveBlock($part4, -20, percentOfAnimation);
});

var setBackgroundPosition = function setBackgroundPosition(percentOfAnimation) {
  $page1.css({
    width: "".concat(100 - percentOfAnimation, "%")
  });
};

var moveText = function moveText($textBlock, distance, percentOfAnimation) {
  $textBlock.css({
    transform: "translatex(".concat(distance * percentOfAnimation / 100, "vw)")
  });
};

var moveBlock = function moveBlock($textBlock, distance, percentOfAnimation) {
  $textBlock.css({
    marginLeft: "".concat(distance * percentOfAnimation / 100, "vw")
  });
};