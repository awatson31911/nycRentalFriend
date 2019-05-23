// export const rentHopCodes = {
//   'Allerton': '110',
//   'Astoria': '56',
//   'Auburndale': '162',
//   'Bath Beach': '129',
//   'Battery Park City': '51',
//   'Bay Ridge': '62',
//   'Bayside': '166',
//   'Bedford Park': '131',
//   'Bedford-Stuyvesant': '38',
//   'Belmont': '139',
//   'Bensonhurst': '109',
//   'Bergen - Lafayette': '173',
//   'Bergen Beach': '179',
//   'Boerum Hill': '72',
//   'Borough Park': '104',
//   'Bowery': '69',
//   'Briarwood': '103',
//   'Brighton Beach': '134',
//   'Bronx Park': '164',
//   'Brooklyn Heights': '60',
//   'Brooklyn Navy Yard': '130',
//   'Brownsville': '124',
//   'Bushwick': '40',
//   'Canarsie': '121',
//   'Carroll Gardens': '86',
//   'Central Harlem': '48',
//   'Central Park': '68',
//   'Chelsea': '33',
//   'Chinatown': '102',
//   'Civic Center': '92',
//   'Clason Point': '143',
//   'Clinton Hill': '61',
//   'Cobble Hill': '99',
//   'College Point': '167',
//   'Concourse': '136',
//   'Concourse Village': '150',
//   'Coney Island': '154',
//   'Corona': '126',
//   'Crown Heights': '52',
//   'Cypress Hills': '135',
//   'DUMBO': '105',
//   'Downtown Brooklyn': '63',
//   'Dyker Heights': '115',
//   'East Elmhurst': '172',
//   'East Flatbush': '79',
//   'East Harlem': '49',
//   'East New York': '101',
//   'East Shore': '27',
//   'East Tremont': '178',
//   'East Village': '35',
//   'Elmhurst': '90',
//   'Far Rockaway': '156',
//   'Financial District': '31',
//   'Flatbush': '55',
//   'Flatiron District': '57',
//   'Flatlands': '116',
//   'Floyd Bennett Airfield': '194',
//   'Flushing': '81',
//   'Flushing Meadows-Corona Park': '183',
//   'Fordham Heights': '137',
//   'Fordham Manor': '114',
//   'Forest Hills': '66',
//   'Forest Park': '184',
//   'Fort Greene': '74',
//   'Fresh Meadows': '171',
//   'Garment District': '54',
//   'Glen Oaks': '174',
//   'Glendale': '106',
//   'Gowanus': '85',
//   'Gramercy Park': '47',
//   'Gravesend': '108',
//   'Greenpoint': '77',
//   'Greenville': '163',
//   'Greenwich Village': '42',
//   'Greenwood Heights': '73',
//   'Hell\'s Kitchen': '32',
//   'Highbridge': '161',
//   'Historic Downtown': '133',
//   'Hollis': '165',
//   'Holliswood': '185',
//   'Howard Beach': '181',
//   'Hunts Point': '187',
//   'Inwood': '70',
//   'Jackson Heights': '83',
//   'Jamaica': '93',
//   'Jamaica Estates': '132',
//   'Jamaica Hills': '160',
//   'Kensington': '89',
//   'Kew Gardens': '76',
//   'Kew Gardens Hills': '148',
//   'Kingsbridge': '118',
//   'Kips Bay': '37',
//   'Koreatown': '87',
//   'Little Italy': '88',
//   'Long Island City': '45',
//   'Longwood': '189',
//   'Lower East Side': '59',
//   'Mapleton': '122',
//   'Marble Hill': '188',
//   'Marine Park': '182',
//   'Maspeth': '119',
//   'McGinley Square': '180',
//   'Mid-Island': '23',
//   'Middle Village': '128',
//   'Midtown East': '34',
//   'Midwood': '100',
//   'Mill Basin': '177',
//   'Morris Heights': '168',
//   'Morris Park': '145',
//   'Morrisania': '158',
//   'Mott Haven': '151',
//   'Mount Eden': '152',
//   'Mount Hope': '159',
//   'Murray Hill': '36',
//   'NoHo': '80',
//   'NoLita': '71',
//   'NoMad': '75',
//   'North Shore': '24',
//   'Norwood': '113',
//   'Ocean Hill': '82',
//   'Ozone Park': '140',
//   'Park Slope': '50',
//   'Parkchester': '141',
//   'Pelham Bay': '153',
//   'Pelham Parkway': '96',
//   'Prospect Heights': '78',
//   'Prospect Park': '120',
//   'Randalls-Wards Island': '193',
//   'Red Hook': '111',
//   'Rego Park': '64',
//   'Richmond Hill': '107',
//   'Ridgewood': '67',
//   'Riverdale': '91',
//   'Rockaway Beach': '142',
//   'Roosevelt Island': '97',
//   'Sheepshead Bay': '94',
//   'SoHo': '58',
//   'South Jamaica': '169',
//   'South Ozone Park': '138',
//   'South Shore': '26',
//   'St. Albans': '186',
//   'Stuyvesant Town - Peter Cooper Village': '65',
//   'Sunnyside': '1000',
//   'Sunset Park': '84',
//   'The Heights': '149',
//   'The Waterfront': '112',
//   'Theater District': '43',
//   'Throgs Neck': '175',
//   'Tribeca': '44',
//   'Two Bridges': '127',
//   'Unionport': '170',
//   'University Heights': '146',
//   'Upper East Side': '29',
//   'Upper West Side': '30',
//   'Van Cortlandt Park': '191',
//   'Van Nest': '157',
//   'Vinegar Hill': '117',
//   'Wakefield': '147',
//   'Washington Heights': '46',
//   'West Farms': '176',
//   'West Harlem': '53',
//   'West Side': '155',
//   'West Village': '39',
//   'Westchester Village': '192',
//   'Whitestone': '125',
//   'Williamsbridge': '144',
//   'Williamsburg': '41',
//   'Windsor Terrace': '98',
//   'Woodhaven': '123',
//   'Woodlawn Heights': '190',
//   'Woodside': '95',
// };

export const rentHopCodes = {
  brooklyn: [
    { name: 'Bedford-Stuyvesant', code: '38' }
    , { name: 'Bushwick', code: '40' }
    , { name: 'Greenpoint', code: '77' }
    , { name: 'Williamsburg', code: '41' }
    , { name: 'Boerum Hill', code: '72' }
    , { name: 'Carroll Gardens', code: '86' }
    , { name: 'Cobble Hill', code: '99' }
    , { name: 'Gowanus', code: '85' }
    , { name: 'Greenwood Heights', code: '73' }
    , { name: 'Park Slope', code: '50' }
    , { name: 'Prospect Park', code: '120' }
    , { name: 'Red Hook', code: '111' }
    , { name: 'Sunset Park', code: '84' }
    , { name: 'Windsor Terrace', code: '98' }
    , { name: 'Crown Heights', code: '52' }
    , { name: 'East Flatbush', code: '79' }
    , { name: 'Flatbush', code: '55' }
    , { name: 'Kensington', code: '89' }
    , { name: 'Midwood', code: '100' }
    , { name: 'Ocean Hill', code: '82' }
    , { name: 'Brooklyn Heights', code: '60' }
    , { name: 'Brooklyn Navy Yard', code: '130' }
    , { name: 'Clinton Hill', code: '61' }
    , { name: 'DUMBO', code: '105' }
    , { name: 'Downtown Brooklyn', code: '63' }
    , { name: 'Fort Greene', code: '74' }
    , { name: 'Prospect Heights', code: '78' }
    , { name: 'Vinegar Hill', code: '117' }
    , { name: 'Bath Beach', code: '129' }
    , { name: 'Bay Ridge', code: '62' }
    , { name: 'Bensonhurst', code: '109' }
    , { name: 'Borough Park', code: '104' }
    , { name: 'Dyker Heights', code: '115' }
    , { name: 'Mapleton', code: '122' }
    , { name: 'Brighton Beach', code: '134' }
    , { name: 'Coney Island', code: '154' }
    , { name: 'Gravesend', code: '108' }
    , { name: 'Sheepshead Bay', code: '94' }
    , { name: 'Brownsville', code: '124' }
    , { name: 'Canarsie', code: '121' }
    , { name: 'Cypress Hills', code: '135' }
    , { name: 'East New York', code: '101' }
    , { name: 'Bergen Beach', code: '179' }
    , { name: 'Flatlands', code: '116' }
    , { name: 'Floyd Bennett Airfield', code: '194' }
    , { name: 'Marine Park', code: '182' }
    , { name: 'Mill Basin', code: '177' }
  ],
  bronx: [
    { name: 'Bedford Park', code: '131' }
    , { name: 'Belmont', code: '139' }
    , { name: 'Bronx Park', code: '164' }
    , { name: 'Concourse', code: '136' }
    , { name: 'Concourse Village', code: '150' }
    , { name: 'East Tremont', code: '178' }
    , { name: 'Fordham Heights', code: '137' }
    , { name: 'Fordham Manor', code: '114' }
    , { name: 'Highbridge', code: '161' }
    , { name: 'Hunts Point', code: '187' }
    , { name: 'Kingsbridge', code: '118' }
    , { name: 'Longwood', code: '189' }
    , { name: 'Marble Hill', code: '188' }
    , { name: 'Morris Heights', code: '168' }
    , { name: 'Morrisania', code: '158' }
    , { name: 'Mott Haven', code: '151' }
    , { name: 'Mount Eden', code: '152' }
    , { name: 'Mount Hope', code: '159' }
    , { name: 'Norwood', code: '113' }
    , { name: 'Riverdale', code: '91' }
    , { name: 'University Heights', code: '146' }
    , { name: 'Van Cortlandt Park', code: '191' }
    , { name: 'West Farms', code: '176' }
    , { name: 'Allerton', code: '110' }
    , { name: 'Clason Point', code: '143' }
    , { name: 'Morris Park', code: '145' }
    , { name: 'Parkchester', code: '141' }
    , { name: 'Pelham Bay', code: '153' }
    , { name: 'Pelham Parkway', code: '96' }
    , { name: 'Throgs Neck', code: '175' }
    , { name: 'Unionport', code: '170' }
    , { name: 'Van Nest', code: '157' }
    , { name: 'Wakefield', code: '147' }
    , { name: 'Westchester Village', code: '192' }
    , { name: 'Williamsbridge', code: '144' }
    , { name: 'Woodlawn Heights', code: '190' }]
  , manhattan: [
    { name: 'Battery Park City', code: '51' }
    , { name: 'Bowery', code: '69' }
    , { name: 'Chinatown', code: '102' }
    , { name: 'Civic Center', code: '92' }
    , { name: 'East Village', code: '35' }
    , { name: 'Financial District', code: '31' }
    , { name: 'Greenwich Village', code: '42' }
    , { name: 'Little Italy', code: '88' }
    , { name: 'Lower East Side', code: '59' }
    , { name: 'NoHo', code: '80' }
    , { name: 'NoLita', code: '71' }
    , { name: 'SoHo', code: '58' }
    , { name: 'Tribeca', code: '44' }
    , { name: 'Two Bridges', code: '127' }
    , { name: 'West Village', code: '39' }
    , { name: 'Chelsea', code: '33' }
    , { name: 'Flatiron District', code: '57' }
    , { name: 'Garment District', code: '54' }
    , { name: 'Gramercy Park', code: '47' }
    , { name: 'Hell\'s Kitchen', code: '32' }
    , { name: 'Kips Bay', code: '37' }
    , { name: 'Koreatown', code: '87' }
    , { name: 'Midtown East', code: '34' }
    , { name: 'Murray Hill', code: '36' }
    , { name: 'NoMad', code: '75' }
    , { name: 'Stuyvesant Town - Peter Cooper Village', code: '65' }
    , { name: 'Theater District', code: '43' }
    , { name: 'Central Harlem', code: '48' }
    , { name: 'Central Park', code: '68' }
    , { name: 'East Harlem', code: '49' }
    , { name: 'Inwood', code: '70' }
    , { name: 'Upper East Side', code: '29' }
    , { name: 'Upper West Side', code: '30' }
    , { name: 'Washington Heights', code: '46' }
    , { name: 'West Harlem', code: '53' }
    , { name: 'Randalls-Wards Island', code: '193' }
    , { name: 'Roosevelt Island', code: '97' }
  ],
  queens: [
    { name: 'Astoria', code: '56' }
    , { name: 'Corona', code: '126' }
    , { name: 'East Elmhurst', code: '172' }
    , { name: 'Elmhurst', code: '90' }
    , { name: 'Forest Hills', code: '66' }
    , { name: 'Glendale', code: '106' }
    , { name: 'Jackson Heights', code: '83' }
    , { name: 'Long Island City', code: '45' }
    , { name: 'Maspeth', code: '119' }
    , { name: 'Middle Village', code: '128' }
    , { name: 'Rego Park', code: '64' }
    , { name: 'Ridgewood', code: '67' }
    , { name: 'Sunnyside', code: '1000' }
    , { name: 'Woodside', code: '95' }
    , { name: 'Auburndale', code: '162' }
    , { name: 'Bayside', code: '166' }
    , { name: 'College Point', code: '167' }
    , { name: 'Flushing', code: '81' }
    , { name: 'Flushing Meadows-Corona Park', code: '183' }
    , { name: 'Fresh Meadows', code: '171' }
    , { name: 'Glen Oaks', code: '174' }
    , { name: 'Kew Gardens', code: '76' }
    , { name: 'Kew Gardens Hills', code: '148' }
    , { name: 'Whitestone', code: '125' }
    , { name: 'Briarwood', code: '103' }
    , { name: 'Hollis', code: '165' }
    , { name: 'Holliswood', code: '185' }
    , { name: 'Jamaica', code: '93' }
    , { name: 'Jamaica Estates', code: '132' }
    , { name: 'Jamaica Hills', code: '160' }
    , { name: 'South Jamaica', code: '169' }
    , { name: 'St. Albans', code: '186' }
    , { name: 'Forest Park', code: '184' }
    , { name: 'Howard Beach', code: '181' }
    , { name: 'Ozone Park', code: '140' }
    , { name: 'Richmond Hill', code: '107' }
    , { name: 'South Ozone Park', code: '138' }
    , { name: 'Woodhaven', code: '123' }
    , { name: 'Far Rockaway', code: '156' }
    , { name: 'Rockaway Beach', code: '142' }
  ],
  'staten island': [
    { name: 'East Shore', code: '27' }
    , { name: 'Mid-Island', code: '23' }
    , { name: 'North Shore', code: '24' }
    , { name: 'South Shore', code: '26' }
  ]
};