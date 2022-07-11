const sidebarOpen = document.querySelector(".sidebar-open")
const sidebarClose = document.querySelector(".sidebar-close")
const sidebar = document.querySelector(".sidebar")
const backdrop = document.querySelector(".backdrop")

// OPEN SIDEBAR
sidebarOpen.onclick = () => {
    sidebar.classList.add("show")
    backdrop.classList.add("show")
    document.querySelector("html").style.overflowY = "hidden"
}

// CLOSE SIDEBAR
sidebarClose.onclick = () => {
    sidebar.classList.remove("show")
    backdrop.classList.remove("show")
    document.querySelector("html").style.overflowY = "initial"
}

// CLOSE SIDEBAR
backdrop.onclick = () => sidebarClose.click()
