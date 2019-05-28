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
    } else if (allBoroughNeighborhoods.length > 0) {
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
  return resultQueryStr.length <= 18 ? resultQueryStr= '' : resultQueryStr+= '&';
}

export default function buildURL_rentHop(neighborhoodCodes,
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
  const bedroomStr = numBedrooms.length > 0
    ? ( numBedrooms.map((num) => { //extrapalate into helper
      return `bedrooms%5B%5D=${num}`;
    }).join('&') + '&' )
    : '';
  const bathroomStr = numBathrooms.length > 0
    ? ( numBathrooms.map((num) => { //extrapalate into helper
      return `bathrooms%5B%5D=${num}`;
    }).join('&') + '&' )
    : '';
  const neighborhoodStr = mapNeighborhoodCodes(neighborhoods, neighborhoodCodes);

  return `${baseUrl}min_price=${minPrice}&max_price=${maxPrice}&${bedroomStr}${bathroomStr}${hasCats ? 'features%5B%5D=Cats+Allowed&' : ''}${hasDogs ? 'features%5B%5D=Dogs+Allowed&' : ''}${hasWasherDryerInUnit ? 'features%5B%5D=Laundry+In+Unit&' : ''}${hasWasherDryerInBuilding ? 'features%5B%5D=Laundry+In+Building&' : ''}${hasSharedOutdoorArea ? 'features%5B%5D=Common+Outdoor+Space&' : ''}${hasPrivateOutdoorArea ? 'features%5B%5D=Private+Outdoor+Space&' : ''}${hasFitnessGym ? 'features%5B%5D=Fitness+Center&' : ''}${neighborhoodStr}sort=hopscore&page=1&search=1`;
}