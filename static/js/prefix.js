$(document).ready(function () {
    $(".prefix").select2({
        templateResult: prefixResult,
        templateSelection: PrefixSelection,
    });
});

let icons = {
    "+994": "./static/assets/svg/flag-aze.svg",
    "+7": "./static/assets/img/russia-flag.png",
    "+1": "./static/assets/img/usa-flag.png"
}

function PrefixSelection(state) {
    if (!state.id) { return state.text; }
    var $state = $(
        `
        <div class="prefix-wrapper" 
        style="border-radius: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.4375rem;">
        <img src="${icons[state.text]}"
        style="width: 15px; 
        border-radius: 50%;
        height: 15px;"/>
        <span 
        style="display: flex;
        align-items: center;
        gap: 0.3125rem;
        transform: translateY(2px);
        font-size: 13px;">
          ${state.text}
          <img src="./static/assets/svg/down.svg"
          style="transform: translateY(-1px);
          width: 9px;"
           />
        </span>
        </div>
        `
    );
    return $state;
}

function prefixResult(state) {
    if (!state.id) { return state.text; }
    var $state = $(
        `
        <div class="prefix-wrapper" 
        style="border-radius: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.3125rem;">
        <img src="${icons[state.text]}" 
        style="width: 15px; 
        border-radius: 50%;
        height: 15px;"/>
        <span 
        style="display: flex;
        align-items: center;
        gap: 0.3125rem;
        font-size: .8125rem;">
          ${state.text}
        </span>
        </div>
        `
    );
    return $state;
}