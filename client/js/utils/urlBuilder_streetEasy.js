function mapNeighborhoodCodes(selectedNeighborhoods, neighborhoodCodes) {
  /*  
      Memoize neighborhood codes to optimize; 
      needs to take selected neighborhoods as well as 
      stored codes that have already been used  
  */

  const neighborhoods = Object.keys(selectedNeighborhoods)
    .filter(property => (selectedNeighborhoods[property] === true && !property.includes('amenity')));
  let resultQueryStr = 'neighborhoods_str=';
  let firstCode = true;

  for (let i = 0; i < neighborhoods.length; i++) {
    const neighborhood = neighborhoods[i];

    // Logic for any 'allBorough' selections
    if (neighborhood === 'allBronx') {
      if (i === 0) {
        resultQueryStr += '4';
        firstCode = false;
      } else {
        resultQueryStr += '%2C4';
      }
      continue;
    } else if (neighborhood === 'allBrooklyn') {
      if (i === 0) {
        resultQueryStr += '2';
        firstCode = false;
      } else {
        resultQueryStr += '%2C2';
      }
      continue;
    } else if (neighborhood === 'allManhattan') {
      if (i === 0) {
        resultQueryStr += '1';
        firstCode = false;
      } else {
        resultQueryStr += '%2C1';
      }
      continue;
    } else if (neighborhood === 'allQueens') {
      if (i === 0) {
        resultQueryStr += '3';
        firstCode = false;
      } else {
        resultQueryStr += '%2C3';
      }
      continue;
    } else if (neighborhood === 'allStatenIsland') {
      if (i === 0) {
        resultQueryStr += '6';
        firstCode = false;
      } else {
        resultQueryStr += '%2C6';
      }
      continue;
    }

    // Logic for individual neighborhoods
    if (i === 0 && firstCode) {
      resultQueryStr += `${neighborhoodCodes[neighborhood]}`;
      firstCode = false;
    } else {
      resultQueryStr += `%2C${neighborhoodCodes[neighborhood]}`;
    }

  }

  return resultQueryStr.length <= 18 ? resultQueryStr = '' : resultQueryStr += '&';
}

export default function buildURL_rentHop(neighborhoodCodes,
  {
    amenity_priceMin,
    amenity_priceMax,
    amenity_hasDogs,
    amenity_hasCats,
    amenity_hasWasherDryerInUnit,
    amenity_hasWasherDryerInBuilding,
    amenity_hasSharedOutdoorArea,
    amenity_hasPrivateOutdoorArea,
    amenity_hasFitnessGym,
    ...amenities
  }
) {
  const baseUrl = 'https://www.renthop.com/search/nyc?';
  const amenity_numBedrooms = Object.keys(amenities).filter((amenity) => amenity.includes('numBed'));
  const amenity_numBathrooms = Object.keys(amenities).filter((amenity) => amenity.includes('numBath'));

  const bedroomStr = amenity_numBedrooms.map((numString) => { //extrapalate into helper
    if (amenities[numString]) {
      return `bedrooms%5B%5D=${numString.slice(-1)}&`;
    }
    return '';
  }).join('');

  const bathroomStr = amenity_numBathrooms.map((numString) => { //extrapalate into helper
    if (amenities[numString]) {
      return `bathrooms%5B%5D=${numString.slice(-1)}&`;
    }
    return '';
  }).join('');

  const neighborhoodStr = mapNeighborhoodCodes(amenities, neighborhoodCodes);

  return `${baseUrl}min_price=${amenity_priceMin}&max_price=${amenity_priceMax}&${bedroomStr}${bathroomStr}${amenity_hasCats ? 'features%5B%5D=Cats+Allowed&' : ''}${amenity_hasDogs ? 'features%5B%5D=Dogs+Allowed&' : ''}${amenity_hasWasherDryerInUnit ? 'features%5B%5D=Laundry+In+Unit&' : ''}${amenity_hasWasherDryerInBuilding ? 'features%5B%5D=Laundry+In+Building&' : ''}${amenity_hasSharedOutdoorArea ? 'features%5B%5D=Common+Outdoor+Space&' : ''}${amenity_hasPrivateOutdoorArea ? 'features%5B%5D=Private+Outdoor+Space&' : ''}${amenity_hasFitnessGym ? 'features%5B%5D=Fitness+Center&' : ''}${neighborhoodStr}sort=hopscore&page=1&search=1`;
}