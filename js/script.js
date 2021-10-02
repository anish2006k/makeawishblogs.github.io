var navbar = document.getElementById("nav")
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

var list = document.getElementById("list")
function Toggle() {
    if (list.style.left === "-100%") {
        list.style.left = "0%";
    } else {
        list.style.left = "-100%";
    }
}

window.onLoad(window.scrollTo(0, 0));