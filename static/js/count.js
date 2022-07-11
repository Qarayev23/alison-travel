const decBtn = document.querySelectorAll(".dec-btn")
const incBtn = document.querySelectorAll(".inc-btn")

incBtn.forEach((item) => {
    item.onclick = function (event) {
        const currentValue = Number(this.nextElementSibling.value)
        this.nextElementSibling.value = currentValue + 1

        if (currentValue === 0) {
            this.nextElementSibling.nextElementSibling.classList.remove("disabled")
        }
    }
})

decBtn.forEach((item) => {
    item.onclick = function (event) {
        const currentValue = Number(this.previousElementSibling.value)
        this.previousElementSibling.value = currentValue - 1

        if (currentValue === 1) {
            this.classList.add("disabled")
        } else if (currentValue === 0) {
            this.previousElementSibling.value = 0
        }
    }
})
