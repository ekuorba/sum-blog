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

//-------------Review-------------//

function showReview(){
    document.querySelector(".review").style.opacity = "100%"
    document.querySelector(".product-img").style.filter = "brightness(0.5)"
}

function hideReview(){
    document.querySelector(".review").style.opacity = "0%"
    document.querySelector(".product-img").style.filter = "brightness(1)"
}

var productImg = document.querySelector(".product-img")
productImg.addEventListener("mouseover", showReview)
productImg.addEventListener("mouseout", hideReview)

