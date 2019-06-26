function mapNeighborhoodCodes(selectedNeighborhoods, neighborhoodCodes) {
  /*  
      Memoize neighborhood codes to optimize; 
      needs to take selected neighborhoods as well as 
      stored codes that have already been used  
  */

  const neighborhoods = Object.keys(selectedNeighborhoods)
    .filter(property => (selectedNeighborhoods[property] === true && !property.includes('amenity')));
  const neightborhoodArr = [];

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

  return neightborhoodArr.join(',').length ? '%7Carea:' + neightborhoodArr.join(',') : '';
}

export default function buildURL_streetEasy(neighborhoodCodes,
  {
    amenity_priceMin,
    amenity_priceMax,
    amenity_noFee,
    amenity_hasDogs,
    amenity_hasCats,
    amenity_hasDishwasher,
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
  let bedroomStr;
  let bathroomStr;
  const numBedroomsArr = Object.keys(amenities)
    .filter((amenity) => amenity.includes('numBed') && amenities[amenity] === true)
    .map((numString) => numString.slice(-1)) // Grabs actual number of beds
    .sort((a, b) => a > b); //Sorts num bedrooms asc
  const numBathroomsArr = Object.keys(amenities)
    .filter((amenity) => amenity.includes('numBath') && amenities[amenity] === true)
    .map((numString) => numString.slice(-1)) // Grabs actual number of bathrooms
    .sort((a, b) => a > b); //Sorts num bathrooms asc
  const neighborhoodStr = mapNeighborhoodCodes(amenities, neighborhoodCodes);
  const hasAmenities = amenity_hasDishwasher ||
    amenity_hasWasherDryerInUnit ||
    amenity_hasWasherDryerInBuilding ||
    amenity_hasSharedOutdoorArea ||
    amenity_hasPrivateOutdoorArea ||
    amenity_hasFitnessGym ||
    amenity_hasElevator;

  if (numBedroomsArr.length > 1) {
    bedroomStr = `%7Cbeds>=${numBedroomsArr[0]}`
  } else if (numBedroomsArr.length === 1) {
    numBedroomsArr[0] === '0'
      ? '%7Cbeds<1'
      : `%7Cbeds=${numBedroomsArr[0]}`
  } else {
    bedroomStr = '';
  }

  if (numBathroomsArr.length > 1) {
    bathroomStr = `%7Cbaths>=${numBathroomsArr[0]}`
  } else if (numBathroomsArr.length === 1) {
    numBathroomsArr[0] === '0'
      ? '%7Cbaths<1'
      : `%7Cbaths=${numBathroomsArr[0]}`
  } else {
    bathroomStr = '';
  }

  return `${baseUrl}%7Cprice=${amenity_priceMin}-${amenity_priceMax}${neighborhoodStr}${bedroomStr}${bathroomStr}${hasAmenities
    ? (`%7Camenities:${amenity_hasDishwasher ? 'dishwasher,' : ''}${amenity_hasElevator ? 'elevator,' : ''}${amenity_hasSharedOutdoorArea || amenity_hasPrivateOutdoorArea ? 'outdoor_space,' : ''}${amenity_hasWasherDryerInUnit ? 'washer_dryer,' : ''}${amenity_hasWasherDryerInBuilding ? 'laundry,' : ''}${amenity_hasFitnessGym ? 'gym,' : ''}${amenity_hasCats || amenity_hasDogs ? 'pets' : ''} `)
    : ''}${amenity_noFee ? '%7Cno_fee:1' : ''}?sort_by=listed_desc`;
}