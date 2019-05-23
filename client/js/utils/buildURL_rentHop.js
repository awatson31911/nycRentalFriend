import { rentHopCodes as neighborhoodCodes } from 'utils/neighborhoodCodes';

function mapNeighborhoodCodes(selectedNeighborhoods, neighborhoodCodes) {
  /*  
      Memoize neighborhood codes to optimize; 
      needs to take selected Codes as well as 
      stored codes that have already been used  
  */

  const boroughs = Object.keys(selectedNeighborhoods);
  let resultQueryStr = 'neighborhoods_str=';
  let firstCode = true;

  for (let i = 0; i < boroughs.length; i++) {
    const borough = borough[i];

    if (borough.all) {
      switch (borough) {
        case 'bronx':
          if (i === 0) {
            resultQueryStr += '16%2C18&';
            firstCode = false;
          } else {
            resultQueryStr += '%2C16%2C18&';
          }
          break;
        case 'brooklyn':
          if (i === 0) {
            resultQueryStr += '10%2C12%2C13%2C14%2C15%2C20%2C21%2C25&';
            firstCode = false;
          } else {
            resultQueryStr += '%2C10%2C12%2C13%2C14%2C15%2C20%2C21%2C25&';
          }
          break;
        case 'manhattan':
          if (i === 0) {
            resultQueryStr += '7%2C8%2C9%2C1000&';
            firstCode = false;
          } else {
            resultQueryStr += '%2C7%2C8%2C9%2C1000&';
          }
          break;
        case 'queens':
          if (i === 0) {
            resultQueryStr += '11%2C17%2C19%2C22%2C28&';
            firstCode = false;
          } else {
            resultQueryStr += '%2C11%2C17%2C19%2C22%2C28&';
          }
          break;
        case 'statenIsland':
          if (i === 0) {
            resultQueryStr += '10002&';
            firstCode = false;
          } else {
            resultQueryStr += '%2C10002&';
          }
          break;

        default:
          break;
      }
    } else {
      const allBoroughNeighborhoods = borough.neighborhoods;

      allBoroughNeighborhoods.forEach((neighborhood, j) => {
        if (j === 0 && firstCode) {
          resultQueryStr += `${neighborhoodCodes[neighborhood]}&`;
          firstCode = false;
        } else {
          resultQueryStr += `%2C${neighborhoodCodes[neighborhood]}&`;
        }
      });
    }
  }
  return resultQueryStr;
}

export default function buildURL_rentHop(minPrice,
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


  return `${baseUrl}?
    min_price=${minPrice}&
    max_price=${maxPrice}&
    ${numBedrooms.map((num) => { //extrapalate into helper
    return `bedrooms%5B%5D=${num}&`;
  })}
    ${numBathrooms.map((num) => { //extrapalate into helper
    return `bathrooms%5B%5D=${num}&`;
  })}
  ${hasCats ? 'features%5B%5D=Cats+Allowed&' : ''}
  ${hasDogs ? 'features%5B%5D=Dogs+Allowed&' : ''}
  ${hasWasherDryerInUnit ? 'features%5B%5D=Laundry+In+Unit&' : ''}
  ${hasWasherDryerInBuilding ? 'features%5B%5D=Laundry+In+Building&' : ''}
  ${hasSharedOutdoorArea ? 'features%5B%5D=Common+Outdoor+Space&' : ''}
  ${hasPrivateOutdoorArea ? 'features%5B%5D=Private+Outdoor+Space&' : ''}
  ${hasFitnessGym ? 'features%5B%5D=Fitness+Center&' : ''}
    sort=hopscore&page=1&search=1`;
}


const testInput = {
  brooklyn: {
    all: false,
    neighborhoods: {}
  },
  bronx: {
    all: false,
    neighborhoods: {}
  },
  manhattan: {
    all: false,
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
}