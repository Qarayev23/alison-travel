document.querySelectorAll(".fixed-height-text__more").forEach((item) => {
    if (item.parentElement.clientHeight < 340) {
        item.parentElement.classList.add("not-show-more")
        item.style.display = "none"
    }

    item.onclick = () => {
        item.parentElement.classList.add("active")
        item.classList.add("active")
    }
})