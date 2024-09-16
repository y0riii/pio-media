const menuToggle = document.querySelector(".menu-toggle")
const sideBar = document.querySelector(".sidebar")
const pageLinks = document.querySelectorAll(".page-link")
const work = document.querySelector(".work")
const sections = document.querySelectorAll("section")

function toggle() {
    menuToggle.classList.toggle("active")
    sideBar.classList.toggle("active")
}

document.querySelector("body").addEventListener("mousemove", eyeball)
function eyeball() {
    const eye = document.querySelectorAll(".eye")
    eye.forEach((eye) => {
        var x = eye.getBoundingClientRect().left + (eye.clientWidth / 2)
        var y = eye.getBoundingClientRect().top + (eye.clientHeight / 2)
        var radian = Math.atan2(event.pageX - x, event.pageY - y);
        var rotation = (radian * (180 / Math.PI) * -1) + 270
        eye.style.transform = "rotate("+rotation+"deg)"
    })
}

menuToggle.addEventListener("click", toggle)
pageLinks.forEach(one => {
    one.addEventListener("click", toggle)
})