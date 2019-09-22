/*jslint devel: true, browser: true*/
/*global window */
/*global document */

"use strict";
var score = 0;

if (window.location.href === "correct.html") {
    score += 1;
}

var questions = document.getElementByClassName("one");

setTimeout(function () {
    window.location.href = 'index.html';
}, 2400);

/* var url = window.location.href; */
