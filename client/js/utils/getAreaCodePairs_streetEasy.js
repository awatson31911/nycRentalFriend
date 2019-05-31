(function getAreaCodePairs_rentHop() {
  const neighborhood_CodePairs = {
    manhattan:
    {
      bowery: '69',//
      'central park': '68',//
      'flatiron district': '57',//
      'garment district': '54',//
      koreatown: '87',//
      noho: '80',//
      nolita: '71',//
      soho: '58',//
      'stuyvesant town - peter cooper village': '65',//
      'theater district': '43'//
    },
    bronx:
    {
      allerton: '110',//
      'bronx park': '164',//
      'clason point': '143',//
      'concourse village': '150',//
      'fordham heights': '137',//
      'fordham manor': '114',//
      'mount eden': '152',//
      'mount hope': '159',//
      unionport: '170',//
      'van cortlandt park': '191',//
      'woodlawn heights': '190'//
    },
    brooklyn:
    {
      'brooklyn navy yard': '130',//
      'cypress hills': '135',//
      'floyd bennett airfield': '194',//
      'greenwood heights': '73',//
      'prospect park': '120'//
    },
    queens:
    {
      'flushing meadows-corona park': '183',//
      'forest park': '184',//
      holliswood: '185',//
      'rockaway beach': '142'//
    }
  };

  const boroughs = Object.keys(neighborhood_CodePairs);
  const neighborhoods = document.getElementsByClassName('area_map_selector_checkbox');

  for (let i = 0; i < neighborhoods.length; i++) {
    const neighborhood = neighborhoods[i].parentNode.textContent.slice(1).toLowerCase();

    for (let j = 0; j < boroughs.length; j++) {
      const borough = boroughs[j];

      if (neighborhood_CodePairs[borough][neighborhood] !== undefined) {

        neighborhood_CodePairs[borough][neighborhood] = neighborhoods[i].parentNode.id.split('_')[4];
      }

    }
  }

  return neighborhood_CodePairs;
})();