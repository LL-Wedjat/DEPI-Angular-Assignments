var x = document.getElementById("Home");
var x = document.getElementById("para");
var x = document.getElementsByClassName("col-md-3");
var x = document.getElementsByTagName("div");
var x = document.querySelectorAll(".col-md-3");
var x = document.querySelectorAll(".row .col-md-3");
var x = document.querySelectorAll(".card");
var x = document.querySelector("#para");
var x = document.querySelector(".card");

console.log(x);

var x = document.querySelector(".parent");
x.onmouseenter = function(e) {
    // console.log("Parent div event");
    console.log(e);
};

var input = document.querySelector("#input");
// input.oninput = function(e) {
//     console.log(e);
// };

var parent = document.querySelector(".parent");
var child = document.querySelector(".child");

// parent.onclick = function(e) {
//     console.log("Parent");
//     console.log(e);
// };

// child.onclick = function(e) {
//     console.log("Child");
//     console.log(e);
// };

parent.addEventListener("click", function(e) {
    console.log("Parent");
    console.log(e);
}, false);

child.addEventListener("click", function(e) {
    console.log("Child");
    console.log(e);
    e.stopPropagation();
}, false);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        console.log("Enter pressed");
        console.log(e);
    }
}, false);


var imgs = document.querySelectorAll("img");
var layer = document.querySelector(".layer");
var imgBox = document.querySelector(".img-box");
var exit = document.querySelector(".fa-square-xmark");
var prev = document.querySelector(".fa-angle-left");
var next = document.querySelector(".fa-angle-right");
var currentIndex = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function(e) {
        console.log(imgs[i].getAttribute("src"));
        layer.classList.remove("d-none");
        var imgSrc = imgs[i].getAttribute("src");
        imgBox.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = i;
        e.stopPropagation();
    }, false);
}

function closeGallery() {
    layer.classList.add("d-none");
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= imgs.length) {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    imgBox.style.backgroundImage = `url(${imgSrc})`;
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    imgBox.style.backgroundImage = `url(${imgSrc})`;
}

exit.addEventListener("click", function(e) {
    closeGallery();
    e.stopPropagation();
}, false);

next.addEventListener("click", function(e) {
    nextImage();
    e.stopPropagation();
}, false);

prev.addEventListener("click", function(e) {
    prevImage();
    e.stopPropagation();
}, false);

document.addEventListener("keydown", function(e) {
    if (!layer.classList.contains("d-none")) {
        if (e.key === "ArrowRight" || e.key === " ") {
            if (e.key === " ") {
                e.preventDefault();  // Credit to Gemini to disable spacebar scrolling
            }
            nextImage();
        } else if (e.key === "ArrowLeft") {
            prevImage();
        } else if (e.key === "Escape") {
            closeGallery();
        }
    }
});