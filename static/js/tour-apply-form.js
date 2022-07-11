$(document).ready(function () {
    $("#nationality").select2({
        placeholder: "nationality",
    });

    $("#hotel-option").select2({
        templateResult: hotelResult,
        templateSelection: hotelSelection,
    });
});

function hotelResult(state) {
    const text1 = state.text.split(" ", 3)[0]
    const text2 = state.text.split(" ", 3)[1]
    const text3 = state.text.split(" ", 3)[2]
    if (!state.id) { return state.text; }
    var $state = $(
        `
        <div class="d-flex justify-content-between">
            <p>${text1} ${text2}</p>
            <p>${text3}</p>
        </div>
        `
    );
    return $state;
}

function hotelSelection(state) {
    const text1 = state.text.split(" ", 3)[0]
    const text2 = state.text.split(" ", 3)[1]
    if (!state.id) { return state.text; }
    var $state = $(
        `<p>${text1} ${text2}</p>`
    );
    return $state;
}