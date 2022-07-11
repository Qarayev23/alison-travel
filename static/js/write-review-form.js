$(document).ready(function () {
    $("#country").select2({
        placeholder: "Country",
        dropdownParent: $('#reviewModal'),
    });

    document.querySelectorAll(".rating-radio").forEach((item) => {
        item.onchange = (e) => {
            const number = document.querySelector(".star-rating__number")
            number.innerHTML = e.target.value + ".0"
        }
    })

    document.querySelector("#star-5").click()
});

