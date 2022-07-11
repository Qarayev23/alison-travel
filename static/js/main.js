// fixed navbar
window.addEventListener("scroll", () => {
    const navBar = document.querySelector("header");
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

// OPEN NAVBAR 
document.querySelector(".navbar__open").onclick = () => {
    document.querySelector(".mob-navbar").classList.add("active")
    document.querySelector("html").style.overflowY = "hidden"
}

// CLOSE NAVBAR 
document.querySelector(".mob-navbar__close").onclick = () => {
    document.querySelector(".mob-navbar").classList.remove("active")
    document.querySelector("html").style.overflowY = "initial"
}