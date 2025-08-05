//---------------Darkmode-----------//

var sun = document.getElementById("sun-icon")
var moon = document.getElementById("moon-icon")
var body = document.getElementsByTagName("body")[0]
var introText = document.querySelector(".second-part")

function darkMode() {
    sun.style.display="none"
    moon.style.display="block"
    body.classList.toggle("body-dark")
    introText.style.color="#eeeff1"
}

function lightMode() {
    sun.style.display="block"
    moon.style.display="none"
    body.classList.toggle("body-dark")
    introText.style.color="#1e1e1e"
}

function showReview(){
    document.querySelector(".review-new2").style.opacity = "100%"
    document.querySelector(".product-img-three").style.filter = "brightness(0.5)"
}

function hideReview(){
    document.querySelector(".review-new2").style.opacity = "0%"
    document.querySelector(".product-img-three").style.filter = "brightness(1)"
}

var productImgThree = document.querySelector(".product-img-three")
productImgThree.addEventListener("mouseover", showReview)
productImgThree.addEventListener("mouseout", hideReview)