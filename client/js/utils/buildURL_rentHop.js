//import neighborhoodCodes from './neighborhoodCodes';
const neighborhoodCodes = {
  brooklyn: {
    'Bedford-Stuyvesant': '38'
    , 'Bushwick': '40'
    , 'Greenpoint': '77'
    , 'Williamsburg': '41'
    , 'Boerum Hill': '72'
    , 'Carroll Gardens': '86'
    , 'Cobble Hill': '99'
    , 'Gowanus': '85'
    , 'Greenwood Heights': '73'
    , 'Park Slope': '50'
    , 'Prospect Park': '120'
    , 'Red Hook': '111'
    , 'Sunset Park': '84'
    , 'Windsor Terrace': '98'
    , 'Crown Heights': '52'
    , 'East Flatbush': '79'
    , 'Flatbush': '55'
    , 'Kensington': '89'
    , 'Midwood': '100'
    , 'Ocean Hill': '82'
    , 'Brooklyn Heights': '60'
    , 'Brooklyn Navy Yard': '130'
    , 'Clinton Hill': '61'
    , 'DUMBO': '105'
    , 'Downtown Brooklyn': '63'
    , 'Fort Greene': '74'
    , 'Prospect Heights': '78'
    , 'Vinegar Hill': '117'
    , 'Bath Beach': '129'
    , 'Bay Ridge': '62'
    , 'Bensonhurst': '109'
    , 'Borough Park': '104'
    , 'Dyker Heights': '115'
    , 'Mapleton': '122'
    , 'Brighton Beach': '134'
    , 'Coney Island': '154'
    , 'Gravesend': '108'
    , 'Sheepshead Bay': '94'
    , 'Brownsville': '124'
    , 'Canarsie': '121'
    , 'Cypress Hills': '135'
    , 'East New York': '101'
    , 'Bergen Beach': '179'
    , 'Flatlands': '116'
    , 'Floyd Bennett Airfield': '194'
    , 'Marine Park': '182'
    , 'Mill Basin': '177'
  },
  bronx: {
    'Bedford Park': '131'
    , 'Belmont': '139'
    , 'Bronx Park': '164'
    , 'Concourse': '136'
    , 'Concourse Village': '150'
    , 'East Tremont': '178'
    , 'Fordham Heights': '137'
    , 'Fordham Manor': '114'
    , 'Highbridge': '161'
    , 'Hunts Point': '187'
    , 'Kingsbridge': '118'
    , 'Longwood': '189'
    , 'Marble Hill': '188'
    , 'Morris Heights': '168'
    , 'Morrisania': '158'
    , 'Mott Haven': '151'
    , 'Mount Eden': '152'
    , 'Mount Hope': '159'
    , 'Norwood': '113'
    , 'Riverdale': '91'
    , 'University Heights': '146'
    , 'Van Cortlandt Park': '191'
    , 'West Farms': '176'
    , 'Allerton': '110'
    , 'Clason Point': '143'
    , 'Morris Park': '145'
    , 'Parkchester': '141'
    , 'Pelham Bay': '153'
    , 'Pelham Parkway': '96'
    , 'Throgs Neck': '175'
    , 'Unionport': '170'
    , 'Van Nest': '157'
    , 'Wakefield': '147'
    , 'Westchester Village': '192'
    , 'Williamsbridge': '144'
    , 'Woodlawn Heights': '190'
  }
  , manhattan: {
    'Battery Park City': '51'
    , 'Bowery': '69'
    , 'Chinatown': '102'
    , 'Civic Center': '92'
    , 'East Village': '35'
    , 'Financial District': '31'
    , 'Greenwich Village': '42'
    , 'Little Italy': '88'
    , 'Lower East Side': '59'
    , 'NoHo': '80'
    , 'NoLita': '71'
    , 'SoHo': '58'
    , 'Tribeca': '44'
    , 'Two Bridges': '127'
    , 'West Village': '39'
    , 'Chelsea': '33'
    , 'Flatiron District': '57'
    , 'Garment District': '54'
    , 'Gramercy Park': '47'
    , 'Hell\'s Kitchen': '32'
    , 'Kips Bay': '37'
    , 'Koreatown': '87'
    , 'Midtown East': '34'
    , 'Murray Hill': '36'
    , 'NoMad': '75'
    , 'Stuyvesant Town - Peter Cooper Village': '65'
    , 'Theater District': '43'
    , 'Central Harlem': '48'
    , 'Central Park': '68'
    , 'East Harlem': '49'
    , 'Inwood': '70'
    , 'Upper East Side': '29'
    , 'Upper West Side': '30'
    , 'Washington Heights': '46'
    , 'West Harlem': '53'
    , 'Randalls-Wards Island': '193'
    , 'Roosevelt Island': '97'
  },
  queens: {
    'Astoria': '56'
    , 'Corona': '126'
    , 'East Elmhurst': '172'
    , 'Elmhurst': '90'
    , 'Forest Hills': '66'
    , 'Glendale': '106'
    , 'Jackson Heights': '83'
    , 'Long Island City': '45'
    , 'Maspeth': '119'
    , 'Middle Village': '128'
    , 'Rego Park': '64'
    , 'Ridgewood': '67'
    , 'Sunnyside': '1000'
    , 'Woodside': '95'
    , 'Auburndale': '162'
    , 'Bayside': '166'
    , 'College Point': '167'
    , 'Flushing': '81'
    , 'Flushing Meadows-Corona Park': '183'
    , 'Fresh Meadows': '171'
    , 'Glen Oaks': '174'
    , 'Kew Gardens': '76'
    , 'Kew Gardens Hills': '148'
    , 'Whitestone': '125'
    , 'Briarwood': '103'
    , 'Hollis': '165'
    , 'Holliswood': '185'
    , 'Jamaica': '93'
    , 'Jamaica Estates': '132'
    , 'Jamaica Hills': '160'
    , 'South Jamaica': '169'
    , 'St. Albans': '186'
    , 'Forest Park': '184'
    , 'Howard Beach': '181'
    , 'Ozone Park': '140'
    , 'Richmond Hill': '107'
    , 'South Ozone Park': '138'
    , 'Woodhaven': '123'
    , 'Far Rockaway': '156'
    , 'Rockaway Beach': '142'
  },
  'staten island': {
    'East Shore': '27'
    , 'Mid-Island': '23'
    , 'North Shore': '24'
    , 'South Shore': '26'
  }
};
function mapNeighborhoodCodes(selectedNeighborhoods, neighborhoodCodes) {
  /*  
      Memoize neighborhood codes to optimize; 
      needs to take selected neighborhoods as well as 
      stored codes that have already been used  
  */

  const boroughs = Object.keys(selectedNeighborhoods);
  let resultQueryStr = 'neighborhoods_str=';
  let firstCode = true;

  for (let i = 0; i < boroughs.length; i++) {
    const boroughName = boroughs[i];
    const borough = selectedNeighborhoods[boroughName];
    const allBoroughNeighborhoods = Object.keys(borough.neighborhoods);

    if (borough.all) {
      switch (boroughName) {
        case 'bronx':
          if (i === 0) {
            resultQueryStr += '4';
            firstCode = false;
          } else {
            resultQueryStr += '%2C4';
          }
          break;
        case 'brooklyn':
          if (i === 0) {
            resultQueryStr += '2';
            firstCode = false;
          } else {
            resultQueryStr += '%2C2';
          }
          break;
        case 'manhattan':
          if (i === 0) {
            resultQueryStr += '1';
            firstCode = false;
          } else {
            resultQueryStr += '%2C1';
          }
          break;
        case 'queens':
          if (i === 0) {
            resultQueryStr += '3';
            firstCode = false;
          } else {
            resultQueryStr += '%2C3';
          }
          break;
        case 'statenIsland':
          if (i === 0) {
            resultQueryStr += '6';
            firstCode = false;
          } else {
            resultQueryStr += '%2C6';
          }
          break;

        default:
          break;
      }
    } else if (allBoroughNeighborhoods.length) {
      allBoroughNeighborhoods.forEach((neighborhood, j) => {
        if (j === 0 && firstCode) {
          resultQueryStr += `${neighborhoodCodes[boroughName][neighborhood]}`;
          firstCode = false;
        } else {
          resultQueryStr += `%2C${neighborhoodCodes[boroughName][neighborhood]}`;
        }
      });
    }
  }
  return resultQueryStr += '&';
}

//export default 
function buildURL_rentHop(neighborhoodcodes,
  minPrice,
  maxPrice,
  numBedrooms,
  numBathrooms,
  hasDogs,
  hasCats,
  hasWasherDryerInUnit,
  hasWasherDryerInBuilding,
  hasSharedOutdoorArea,
  hasPrivateOutdoorArea,
  hasFitnessGym,
  neighborhoods) {

  const baseUrl = 'https://www.renthop.com/search/nyc?';
  const bedroomStr = numBedrooms.map((num) => { //extrapalate into helper
    return `bedrooms%5B%5D=${num}`;
  }).join('&');
  const bathroomStr = numBathrooms.map((num) => { //extrapalate into helper
    return `bathrooms%5B%5D=${num}`;
  }).join('&');
  const neighborhoodStr = mapNeighborhoodCodes(neighborhoods, neighborhoodCodes);

  return `${baseUrl}min_price=${minPrice}&max_price=${maxPrice}&${bedroomStr}&${bathroomStr}&${hasCats ? 'features%5B%5D=Cats+Allowed&' : ''}${hasDogs ? 'features%5B%5D=Dogs+Allowed&' : ''}${hasWasherDryerInUnit ? 'features%5B%5D=Laundry+In+Unit&' : ''}${hasWasherDryerInBuilding ? 'features%5B%5D=Laundry+In+Building&' : ''}${hasSharedOutdoorArea ? 'features%5B%5D=Common+Outdoor+Space&' : ''}${hasPrivateOutdoorArea ? 'features%5B%5D=Private+Outdoor+Space&' : ''}${hasFitnessGym ? 'features%5B%5D=Fitness+Center&' : ''}${neighborhoodStr}sort=hopscore&page=1&search=1`;
}


const testInput = {
  brooklyn: {
    all: true,
    neighborhoods: {}
  },
  bronx: {
    all: false,
    neighborhoods: { 'Bronx Park': true, 'Fordham Heights': true }
  },
  manhattan: {
    all: true,
    neighborhoods: {}
  },
  queens: {
    all: false,
    neighborhoods: {}
  },
  statenIsland: {
    all: false,
    neighborhoods: {}
  }
};

//console.log(mapNeighborhoodCodes(testInput, neighborhoodCodes))
console.log(buildURL_rentHop(
  neighborhoodCodes,
  0,
  3000,
  [2, 3],
  [1, 2],
  true,
  false,
  true,
  false,
  false,
  false,
  false,
  testInput
))