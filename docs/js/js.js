"use strict";

var $page1 = document.getElementsByClassName('page--1')[0];
window.addEventListener('scroll', function () {
  var offsetPercent = Math.floor(this.scrollY * 100 / this.innerHeight);
  $page1.style.width = "".concat(100 - offsetPercent / 2, "%");
});