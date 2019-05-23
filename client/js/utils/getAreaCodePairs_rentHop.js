(function getAreaCodePairs_rentHop() {
  const neighborhood_CodePairs = { brooklyn: [], bronx: [], manhattan: [], queens: [], statenIsland: [] };
  const boroughs = document.querySelectorAll('div[tab_num]');

  for (let i = 0; i < boroughs.length; i++) {
    const borough = boroughs[i];
    const neighborhoods = borough.getElementsByClassName('neighborhood-single-item');

    for (let i = 0; i < neighborhoods.length; i++) {
      const hood = neighborhoods[i];
      const hoodName = '' + hood.firstElementChild.value;
      const hoodCode = hood.firstElementChild.id.split('-')[2];

      switch (borough.id) {
        case 'neighborhood-column-1':
          neighborhood_CodePairs.manhattan.push({ [hoodName]: hoodCode });
          break;

        case 'neighborhood-column-2':
          neighborhood_CodePairs.brooklyn.push({ [hoodName]: hoodCode });
          break;

        case 'neighborhood-column-3':
          neighborhood_CodePairs.queens.push({ [hoodName]: hoodCode });
          break;

        case 'neighborhood-column-4':
          neighborhood_CodePairs.bronx.push({ [hoodName]: hoodCode });
          break;
          
        case 'neighborhood-column-6':
          neighborhood_CodePairs.statenIsland.push({ [hoodName]: hoodCode });
          break;

        default:
          break;
      }
    }
  }

  return neighborhood_CodePairs;
})();

//To get neighborhood groupings aka borough subgroups
(function getAreaCodePairs_rentHop() {
  const neighborhood_CodePairs = {};
  const boroughs = document.querySelectorAll('div[tab_num]');

  for (let i = 0; i < boroughs.length; i++) {
    const borough = boroughs[i];
    const neighborhoods = borough.getElementsByClassName('neighborhood-group-item');
    let queryStr = '';
    for (let i = 0; i < neighborhoods.length; i++) {
      const hood = neighborhoods[i];
      const hoodName = '' + hood.firstElementChild.value;
      queryStr+=  '-' + hood.firstElementChild.id.split('-')[2];

      switch (borough.id) {
        case 'neighborhood-column-1':
          neighborhood_CodePairs.manhattan = queryStr;
          break;

        case 'neighborhood-column-2':
          neighborhood_CodePairs.brooklyn = queryStr;
          break;

        case 'neighborhood-column-3':
          neighborhood_CodePairs.queens = queryStr;
          break;

        case 'neighborhood-column-4':
          neighborhood_CodePairs.bronx = queryStr;
          break;
          
        case 'neighborhood-column-6':
          neighborhood_CodePairs.statenIsland = queryStr;
          break;

        default:
          break;
      }
    }
  }

  return neighborhood_CodePairs;
})();

