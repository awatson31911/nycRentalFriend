function mapNeighborhoodCodes(selectedNeighborhoods, neighborhoodCodes) {
  /*  
      Memoize neighborhood codes to optimize; 
      needs to take selected neighborhoods as well as 
      stored codes that have already been used  
  */

  const neighborhoods = Object.keys(selectedNeighborhoods)
    .filter(property => (selectedNeighborhoods[property] === true && !property.includes('amenity')));
  const neightborhoodArr = [];
  let resultQueryStr = '%7Carea:';

  for (let i = 0; i < neighborhoods.length; i++) {
    const neighborhood = neighborhoods[i];

    // Logic for any 'allBorough' selections
    if (neighborhood === 'allBronx') {
      neightborhoodArr.push('200');
      continue;
    } else if (neighborhood === 'allBrooklyn') {
      neightborhoodArr.push('300');
      continue;
    } else if (neighborhood === 'allManhattan') {
      neightborhoodArr.push('100');
      continue;
    } else if (neighborhood === 'allQueens') {
      neightborhoodArr.push('400');
      continue;
    } else if (neighborhood === 'allStatenIsland') {
      neightborhoodArr.push('500');
      continue;
    }

    // Logic for individual neighborhoods
    neightborhoodArr.push(neighborhoodCodes[neighborhood]);
  }

  return resultQueryStr += neightborhoodArr.join(',');
}

export default function buildURL_streetEasy(neighborhoodCodes,
  {
    amenity_priceMin,
    amenity_priceMax,
    amenity_noFee,
    amenity_hasDogs,
    amenity_hasCats,
    amenity_hasWasherDryerInUnit,
    amenity_hasWasherDryerInBuilding,
    amenity_hasSharedOutdoorArea,
    amenity_hasPrivateOutdoorArea,
    amenity_hasFitnessGym,
    amenity_hasElevator,
    ...amenities
  }
) {
  const baseUrl = 'https://streeteasy.com/for-rent/nyc/status:open';
  const amenity_numBedroomsArr = Object.keys(amenities)
    .filter((amenity) => amenity.includes('numBed'))
    .map((numString) => numString.slice(-1)) // Grabs actual number of beds
    .sort((a, b) => a > b); //Sorts num bedrooms asc
  const bedroomStr = amenity_numBedroomsArr.length > 1
    ? `%7Cbeds>=${amenity_numBedroomsArr[0]}`
    : (
      amenity_numBedroomsArr[0] === '0'
        ? `%7Cbeds<1`
        : `%7Cbeds=${amenity_numBedroomsArr[0]}`
    );

  const amenity_numBathroomsArr = Object.keys(amenities).filter((amenity) => amenity.includes('numBath'));
  const bathroomStr = amenity_numBathroomsArr.map((numString) => {
    if (amenities[numString]) {
      return `bathrooms%5B%5D=${numString.slice(-1)}&`;
    }
    return '';
  }).join('');
  const neighborhoodStr = mapNeighborhoodCodes(amenities, neighborhoodCodes);

  return `${baseUrl}%7Cprice=${amenity_priceMin}-${amenity_priceMax}${}${bedroomStr}${bathroomStr}${amenity_hasElevator ? '%7CElevator&' : ''}${amenity_hasCats ? '%7CCats+Allowed&' : ''}${amenity_hasDogs ? '%7CDogs+Allowed&' : ''}${amenity_hasWasherDryerInUnit ? '%7CLaundry+In+Unit&' : ''}${amenity_hasWasherDryerInBuilding ? '%7CLaundry+In+Building&' : ''}${amenity_hasSharedOutdoorArea ? '%7CCommon+Outdoor+Space&' : ''}${amenity_hasPrivateOutdoorArea ? '%7CPrivate+Outdoor+Space&' : ''}${amenity_hasFitnessGym ? '%7CFitness+Center&' : ''}${amenity_noFee ? '%7Cno_fee:1' : ''}sort_by=listed_desc`;
}