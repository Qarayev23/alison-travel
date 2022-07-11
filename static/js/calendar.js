// CALENDAR
var datepickerOptions = {}
Vue.use(window.AirbnbStyleDatepicker, datepickerOptions)

new Vue({
    el: '#app',
    data: {
        dateFormat: 'MM/DD',
        inputDateOne: '',
        inputDateTwo: '',
        mondayFirst: true,
    },
    methods: {
        formatDates: function (dateOne, dateTwo) {
            var formattedDates = ''
            if (dateOne) {
                formattedDates = dateFns.format(dateOne, this.dateFormat)
            }
            if (dateTwo) {
                formattedDates += ' - ' + dateFns.format(dateTwo, this.dateFormat)
            }
            return formattedDates
        },
    },
})

// DROPDOWN TOGGLE
$("#guests-filter-field").click(function () {
    $("#guests-filter").fadeToggle(150);
});

$(document).click(function () {
    $("#guests-filter").fadeOut(150);
});

$("#guests-filter, #guests-filter-field").click(function (e) {
    e.stopPropagation();
});

