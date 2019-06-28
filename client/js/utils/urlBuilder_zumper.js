const amenityCodes = {
  amenity_hasDishwasher: 7,
  amenity_hasPrivateOutdoorArea: 8,
  amenity_hasWasherDryerInUnit: 16,
  amenity_hasElevator: 17,
  amenity_hasFitnessGym: 3,
  amenity_hasSharedOutdoorArea: 14,
  amenity_hasWasherDryerInBuilding: 4
};

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
    amenity_isRoom,
    amenity_isApartment,
    amenity_isCondo,
    amenity_isCoOp,
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
  const baseUrl = 'https://www.zumper.com/apartments-for-rent/new-york-ny/';


  /* ------------- Bedroom logic ---------------- */

  const bedroomStr = Object.keys(amenities)
    .filter((amenity) => amenity.includes('numBed') && amenities[amenity] === true)
    .map((numString) => numString.slice(-1)) // Grabs actual number of beds
    .sort((a, b) => a > b) //Sorts num bedrooms asc
    .join(',');

  /* --------------- Types of Property Logic --------------- */

  const typesOfProps = [amenity_isRoom, amenity_isApartment, amenity_isCondo, amenity_isCoOp];
  for (let i = 0; i < typesOfProps.length; i++) {
    const propertyType = typesOfProps[i];
    if (!propertyType) { typesOfProps.slice(i); }
    else { typesOfProps[i] = propertyType.slice(9).toLowerCase(); }
  }

  if (typesOfProps.length) { `property-categories=${typesOfProps.join('%2C') + '&'}`; }

  /* --------------- Listing Amenities Logic --------------- */

  const listingAmenities = [amenity_hasPrivateOutdoorArea, amenity_hasWasherDryerInUnit, amenity_hasDishwasher];
  for (let i = 0; i < listingAmenities.length; i++) {
    const listingAm = listingAmenities[i];
    if (!listingAm) { listingAmenities.slice(i); }
    else { listingAmenities[i] = amenityCodes[listingAm]; }
  }

  if (listingAmenities.length) { `listing-amenities=${listingAmenities.join('%2C') + '&'}`; }

  /* --------------- Building Amenities Logic --------------- */

  const buildingAmenities = [amenity_hasWasherDryerInBuilding, amenity_hasSharedOutdoorArea, amenity_hasFitnessGym, amenity_hasElevator,];
  for (let i = 0; i < buildingAmenities.length; i++) {
    const buildingAm = buildingAmenities[i];
    if (!buildingAm) { buildingAmenities.slice(i); }
    else { buildingAmenities[i] = amenityCodes[buildingAm]; }
  }

  if (buildingAmenities.length) { `building-amenities=${buildingAmenities.join('%2C') + '&'}`; }

  /* --------------- Neighborhood Logic --------------- */

  const neighborhoodStr = mapNeighborhoodCodes(amenities, neighborhoodCodes);

  /* --------------- Bathroom Logic --------------- */

  let bathroomStr = Object.keys(amenities)
    .filter((amenity) => amenity.includes('numBath') && amenities[amenity] === true)
    .map((numString) => numString.slice(-1)) // Grabs actual number of beds
    .sort((a, b) => a > b)[0]; //Sorts num bedrooms asc

  if (bathroomStr) { bathroomStr = `bathrooms=${bathroomStr}`; }

  /* --------------- Result URL --------------- */

  return `${baseUrl}
  ${amenity_noFee ? 'no-fee/' : ''}
  price-${amenity_priceMin},${amenity_priceMax}/
  ${bedroomStr.length ? bedroomStr + '-beds/' : bedroomStr}
  ${amenity_hasCats || amenity_hasDogs ? 'pets' : ''} 
  ${buildingAmenities || listingAmenities || bathroomStr || typesOfProps
    ? '?'
    : ''}${typesOfProps}${bathroomStr}${listingAmenities}${buildingAmenities}
  box=-74,40.7,-73.7,40.9&
  ${neighborhoodStr}
`;
}


/*
If prop categories OR building amenities OR listing amenities OR bathrooms
add query string for and ternary all three of them: if variable then add else empty string
*/