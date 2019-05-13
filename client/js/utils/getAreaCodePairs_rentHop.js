(function getAreaCodePairs_rentHop() {
    const neighborhoods = document.getElementsByClassName('neighborhood-single-item');
    const neighborhood_CodePairs = {};

    for (let i = 0; i < neighborhoods.length; i++) {
        const hood = neighborhoods[i];
        const hoodName = '' + hood.firstElementChild.value;
        const hoodCode = hood.firstElementChild.id.split('-')[2];
        neighborhood_CodePairs[hoodName] = hoodCode;
    }

    return neighborhood_CodePairs;
})();

