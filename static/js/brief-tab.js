const tabBtn1 = document.getElementById("dashboard-nav__item-1")

function OpenTab(index) {
    var i, tabcontent, tablinks, steps;
    tabcontent = document.getElementsByClassName("tabcontent");
    steps = document.getElementsByClassName("brief-tab__btn");
    tablinks = document.getElementsByClassName("dashboard-nav__item");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" dashboard-nav__item--active", "");
        steps[i].className = steps[i].className.replace(" brief-tab__btn--active", "");
        tabcontent[i].style.display = "none";

    }

    tabcontent[index].style.display = "block";
    tablinks[index].className += " dashboard-nav__item--active";
    steps[index].className += " brief-tab__btn--active"

    document.querySelector(".sidebar-close").click()
}

tabBtn1.click()