const generateData = (type) => {
  const data = [];
  const states = ['Central Equatoria', 'Western Equatoria', 'Eastern Equatoria' , 'Warrap State' , 'Northern Bahr El Ghazal', 'Western Bhar El Ghazal'];
  const counties = ['Juba County', 'Yei County', 'Kajo-Keji County'];
  const payams = ['Juba Town Payam', 'Yei Town Payam', 'Kajo-Keji Town Payam'];
  const types = ['PHCC', 'PHCU', 'Hospital']; // Removed 'Clinic'
  const locations = ['33.3434 56.533', '33.3434 56.533', '33.3434 56.533'];
  const owners = ['Public', 'Private', 'Faith Based', 'NGOs', 'Organized Forces']; // Removed 'Clinic'
  const statuses = ['Functional', 'Non-Functional'];

  for (let i = 1; i <= 525; i++) {
    const randomState = states[Math.floor(Math.random() * states.length)];
    const randomCounty = counties[Math.floor(Math.random() * counties.length)];
    const randomPayam = payams[Math.floor(Math.random() * payams.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomOwner = owners[Math.floor(Math.random() * owners.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    const facility = {
      id: i,
      name: `${type} ${String.fromCharCode(65 + (i % 26))}`, // Generates names like Facility A, Facility B, ...
      state: randomState,
      county: randomCounty,
      payam: randomPayam,
      type: randomType,
      location: randomLocation,
      owner: randomOwner,
      status: randomStatus
    };

    // Set the Date of Establishment to 1972-01-01 for all facilities
    facility.dateOfEstablishment = '1972-01-01';

    // Set operation hours based on facility type
    if (randomType === 'Hospital') {
      facility.open24Hours = 24; // Hospitals are open 24 hours
    } else if (randomType === 'PHCC' || randomType === 'PHCU' ) {
      facility.open24Hours = 8; // PHCC and PHCU operate 8 hours
    }

    data.push(facility);
  }

  return data;
};

export const facilitiesData = generateData('Facility');
export const bomasData = generateData('Boma');

// Make all boma ownership "Public"
bomasData.forEach(boma => {
  boma.owner = 'Public';
});

console.log(facilitiesData);
console.log(bomasData);
