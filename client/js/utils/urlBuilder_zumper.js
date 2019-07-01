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
  let neighborhoodStr = '';
  let mapBox = '';

  for (let i = 0; i < neighborhoods.length; i++) {
    const neighborhood = neighborhoods[i];

    // Logic for any 'allBorough' selections
    if (neighborhood === 'allBronx' && !mapBox.length) {
      mapBox += 'box=-73.93269929931533,40.801361187307215,-73.78575716064348,40.89200022201752&';
      continue;
    } else if (neighborhood === 'allBrooklyn' && !mapBox.length) {
      mapBox += 'box=-74.02158165493081,40.62324107342568,-73.87463951625894,40.714123128525735&';
      continue;
    } else if (neighborhood === 'allManhattan' && !mapBox.length) {
      mapBox += 'box=-74.0291960397817,40.7343983498845,-73.88225390110982,40.825128848846845&';
      continue;
    } else if (neighborhood === 'allQueens' && !mapBox.length) {
      mapBox += 'box=-73.95915819798482,40.64588845703862,-73.67008043919576,40.827466964550624&';
      continue;
    } else if (neighborhood === 'allStatenIsland' && !mapBox.length) {
      mapBox += 'box=-74.2665070614328,40.47957508711025,-73.97262278408907,40.66160615364085&';
      continue;
    }

    neightborhoodArr.push(neighborhoodCodes[neighborhood]);
  }

  neighborhoodStr = neightborhoodArr.join(',').length ? 'neighborhood-ids=' + neightborhoodArr.join(',') : '';

  return mapBox + neighborhoodStr;
}

export default function buildURL_streetEasy(neighborhoodCodes,
  {
    amenity_priceMin,
    amenity_priceMax,
    amenity_noFee,
    amenity_isRoom,
    amenity_isApartment,
    amenity_isCondo,
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

  let bedroomStr = Object.keys(amenities)
    .filter((amenity) => amenity.includes('numBed') && amenities[amenity] === true)
    .map((numString) => numString.slice(-1)) // Grabs actual number of beds
    .sort((a, b) => a > b) //Sorts num bedrooms asc
    .join(',');

  if (bedroomStr.length) {
    bedroomStr += '-beds/';
  }

  /* ------------- Pet logic ---------------- */
  let petStr = '';

  if (amenity_hasCats && amenity_hasDogs) { petStr += 'pet-friendly'; }
  else if (amenity_hasCats) { petStr += 'cat-friendly'; }
  else if (amenity_hasDogs) { petStr += 'dog-friendly'; }

  /* --------------- Types of Property Logic --------------- */

  let typesOfProps = [];

  if (amenity_isRoom) { typesOfProps.push('room'); }
  if (amenity_isApartment) { typesOfProps.push('apartment'); }
  if (amenity_isCondo) { typesOfProps.push('condo'); }

  if (typesOfProps.length) { typesOfProps = `property-categories=${typesOfProps.join('%2C') + '&'}`; }
  else { typesOfProps = ''; }

  /* --------------- Listing Amenities Logic --------------- */

  let listingAmenities = [];
  if (amenity_hasPrivateOutdoorArea) { listingAmenities.push(amenityCodes.amenity_hasPrivateOutdoorArea); }
  if (amenity_hasWasherDryerInUnit) { listingAmenities.push(amenityCodes.amenity_hasWasherDryerInUnit); }
  if (amenity_hasDishwasher) { listingAmenities.push(amenityCodes.amenity_hasDishwasher); }

  if (listingAmenities.length) { listingAmenities = `listing-amenities=${listingAmenities.join('%2C') + '&'}`; }
  else { listingAmenities = ''; }
  /* --------------- Building Amenities Logic --------------- */

  let buildingAmenities = [];
  if (amenity_hasWasherDryerInBuilding) { buildingAmenities.push(amenityCodes.amenity_hasWasherDryerInBuilding); }
  if (amenity_hasSharedOutdoorArea) { buildingAmenities.push(amenityCodes.amenity_hasSharedOutdoorArea); }
  if (amenity_hasFitnessGym) { buildingAmenities.push(amenityCodes.amenity_hasFitnessGym); }
  if (amenity_hasElevator) { buildingAmenities.push(amenityCodes.amenity_hasElevator); }

  if (buildingAmenities.length) { buildingAmenities = `building-amenities=${buildingAmenities.join('%2C') + '&'}`; }
  else { buildingAmenities = ''; }

  /* --------------- Neighborhood Logic --------------- */

  const neighborhoodStr = mapNeighborhoodCodes(amenities, neighborhoodCodes);

  /* --------------- Bathroom Logic --------------- */

  let bathroomStr = Object.keys(amenities)
    .filter((amenity) => amenity.includes('numBath') && amenities[amenity] === true)
    .map((numString) => numString.slice(-1)) // Grabs actual number of beds
    .sort((a, b) => a > b); //Sorts num bedrooms asc

  if (bathroomStr.length) { bathroomStr = `bathrooms=${bathroomStr[0]}&`; }
  else { bathroomStr = ''; }

  /* --------------- Result URL --------------- */

  return `${baseUrl}${amenity_noFee ? 'no-fee/' : ''}price-${amenity_priceMin},${amenity_priceMax}/${bedroomStr}${petStr}${buildingAmenities || listingAmenities || bathroomStr || typesOfProps
    ? '?'
    : ''}${typesOfProps}${bathroomStr}${listingAmenities}${buildingAmenities}${neighborhoodStr}`;
}