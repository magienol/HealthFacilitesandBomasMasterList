const generateData = (type, selectedStates) => {
  const data = [];

  // All available states
  const states = [
    'Abyei Administrative Area',
    'Central Equatoria State',
    'Eastern Equatoria State',
    'Jonglei State',
    'Lakes State',
    'Northern Bahr El Ghazal State',
    'Pibor Administrative Area',
    'Ruweng Administrative Area',
    'Unity State',
    'Upper Nile State',
    'Warrap State',
    'Western Bahr El Ghazal State',
    'Western Equatoria State'
  ];

  // Default counties list
  let counties = [];

  // Adjust counties based on selected state
  const stateCountiesMap = {
    'Abyei Administrative Area': ['Abyei County'],
    'Central Equatoria State': ['Juba County', 'Lainya County', 'Kajo-Keji County', 'Morobo County', 'Terekeka County', 'Yei County'],
    'Eastern Equatoria State': ['Budi County', 'Ikotos County', 'Kapoeta East County', 'Kapoeta North County', 'Kapoeta South County', 'Lafon County', 'Magwi County', 'Torit County'],
    'Jonglei State' : ['Akobo County' , 'Ayod County' , 'Bor South County' , 'Duk County' , 'Fangak County' , 'Nyirol County' , 'Pigi County' , 'Twic East County' , 'Uror County' ], 
    'Lakes State': [ 'Awerial County' , 'Cueibet County', 'Rumbek Centre County', 'Rumbek East County', 'Rumbek North County', 'Wulu County', 'Yirol East County', 'Yirol West County' ] ,
    'Northern Bahr El Ghazal State': ['Aweil Centre County', 'Aweil East County', 'Aweil North County', 'Aweil South County', 'Aweil West County'],
    'Pibor Administrative Area': ['Pibor County' , 'Pochalla County'],
    'Ruweng Administrative Area': ['Abiemnhom County', 'Pariang County'],
    'Unity State': ['Guit County' , 'Koch County' , 'Leer County' , 'Mayendit County' , 'Mayom County' , 'Panyijar County' , 'Rubkona County'],
    'Upper Nile State': [ 'Akoka County' , 'Baliet County' , 'Fashoda County' , 'Longochuk County' , 'Luakpiny/Nasir County' , 'Maban County' , 'Maiwut County' , 'Malakal County' , 'Manyo County' , 'Melut County' , 'Panyikang County' , 'Renk County' , 'Ulang County' ] ,
    'Warrap State': ['Wau County', 'Jur River County', 'Rumbek County'],
    'Western Bahr El Ghazal State': ['Wau County', 'Gok County'],
    'Western Equatoria State': ['Yambio County', 'Tambura County', 'Maridi County']
  };

  // Manually adding the specific data
  const manualData = {
    'Abyei Administrative Area': [
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Abyei Civil Hospital', type: 'Hospital', location: '9.5920517,28.4362648', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Abyei Phcc', type: 'PHCC', location: '9.605027,28.4321627', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Agany Tok Phcu', type: 'PHCU', location: '9.527582,28.4344551', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Agok Phcc', type: 'PHCC', location: '9.3570269,28.5826749', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Amenth Bek Hospital', type: 'Hospital', location: '9.5848252,28.4592471', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Amiet Phcu', type: 'PHCU', location: '9.7156987,28.4657346', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Awal Phcu', type: 'PHCU', location: '9.435215,28.6196528', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Awalnhom Phcu', type: 'PHCU', location: '9.5264843,28.4847421', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Dongop Phcu', type: 'PHCU', location: '9.6382736,28.5045074', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Ganga Phcu', type: 'PHCU', location: '9.4847959,28.5524158', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Juljok Msf Hospital', type: 'Hospital', location: '9.3597296,28.5990978', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Juljok Phcc', type: 'PHCC', location: '9.3658851,28.6049485', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Mabok Phcu', type: 'PHCU', location: '9.4793614,28.6100767', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Mading Achueng Phcu', type: 'PHCU', location: '9.5238189,28.4601466', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Malual Aleiu Phcu', type: 'PHCU', location: '9.4510734,28.4407133', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Mijak Phcu', type: 'PHCU', location: '9.5335818,28.5301189', functionality: 'Highly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Rumamer Phcc', type: 'PHCC', location: '9.4396098,28.6628746', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Athony Phcu', type: 'PHCU', location: '9.419,28.43813', functionality: 'Limitedly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Kolom Phcu', type: 'PHCU', location: 'NA , NA', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Mading Jok Thiang Phcu', type: 'PHCU', location: '9.325046667,28.57597333', functionality: 'Limitedly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Maker Phcc', type: 'PHCC', location: 'NA , NA', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Marial Achak Phcc', type: 'PHCC', location: 'NA , NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Miodol Phcc', type: 'PHCC', location: 'NA , NA', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Miyom Ngok Phcu', type: 'PHCU', location: '9.3635,28.64108', functionality: 'Limitedly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Noong Phcu', type: 'PHCU', location: 'NA , NA', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Nyituach Phcu', type: 'PHCU', location: 'NA , NA', functionality: 'Unknown', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Tagale Phcc', type: 'PHCC', location: 'NA , NA', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Tirawan Phcu', type: 'PHCU', location: 'NA , NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Todaj Phcc', type: 'PHCC', location: 'NA , NA', functionality: 'Not Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Wunchuei Phcu', type: 'PHCU', location: '9.397544000000002,28.674119', functionality: 'Limitedly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Wunpeth Phcu', type: 'PHCU', location: '9.38995,28.55252', functionality: 'Limitedly Functional', supported: 'Unsupported' },
      { county: 'Abyei County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Wunrok Phcu', type: 'PHCU', location: '9.55711,28.43388', functionality: 'Limitedly Functional', supported: 'Unsupported' },
       // ... other facilities for Abyei
    ],
    'Central Equatoria State': [
     
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lokiliri', payamCode: 'SS010108', name: 'Aru Junction Phcu', type: 'PHCU', location:  '4.3635399999999995,  31.9846', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Bungu', payamCode: 'SS010101', name: 'Belle Boma Phcu', type: 'PHCU', location:  '4.6497228,  31.3881437', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Bungu', payamCode: 'SS010101', name: 'Bungu Phcu', type: 'PHCU', location:  '4.664399999999999,31.396121', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'El-Sabah Children Hospital', type: 'Hospital', location:  '4.844289,  31.606819', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Festo Maternity Hospital', type: 'Hospital', location:  '4.8560329,31.5766709', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Friendship Medical Hospital', type: 'Hospital', location:  '4.861953,  31.6003913', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Ghabat Phcc', type: 'PHCC', location:  '4.8578521,  31.609402', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rokon', payamCode: 'SS010114', name: 'Gimora Phcu', type: 'PHCU', location:  '5.16604,  31.14176', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Gondokoro', payamCode: 'SS010104', name: 'Gondokoro Phcu', type: 'PHCU', location:  '4.908,  31.662795', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Gorom Phcc', type: 'PHCC', location:  '4.7567035,  31.443664', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Gudele Block 4 Phcu', type: 'PHCU', location:  '4.86326,  31.56765', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Gudele Surgical Home Private Hospital', type: 'Hospital', location:  '4.86786,  31.5516994', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Gumbo Phcc', type: 'PHCC', location:  '4.814899999999999,  31.62267', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Gurei Phcc', type: 'PHCC', location:  '4.86667,  31.51851', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Hai Jebel Phcu', type: 'PHCU', location:  '4.848152,  31.58016', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lirya', payamCode: 'SS010107', name: 'Ilyangiri Phcu', type: 'PHCU', location:  '4.7705,  32.03556', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Imc Un House Clinic 1', type: 'Clinic', location:  '4.8194061,  31.5377044', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Juba Central Prison Phcc', type: 'PHCC', location:  '4.848549,  31.6131159', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Juba Military Hospital', type: 'Hospital', location:  '4.8315337,  31.585079', functionality: 'Limitedly Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Juba Police Phcc', type: 'PHCC', location:  '4.848848,  31.5918589', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Juba Teaching Hospital', type: 'Hospital', location:  '4.85074,  31.60914', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Kator', payamCode: 'SS010106', name: 'Kator Phcc', type: 'PHCC', location:  '4.83108,  31.59662', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Khor Romula/Jenduru Phcu', type: 'PHCU', location:  '4.793725,  31.591965', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Khorwalliang Phcc', type: 'PHCC', location:  '4.8165694,  31.5807338', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lokiliri', payamCode: 'SS010108', name: 'Kubi Phcu', type: 'PHCU', location:  '4.39024,  31.92267', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Kuda Phcc', type: 'PHCC', location:  '4.85112,  31.58531', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Kworijik Phcu', type: 'PHCU', location:  '4.8514099999999996,  31.5855', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lirya', payamCode: 'SS010107', name: 'Lirya Phcc', type: 'PHCC', location:  '4.38563,  32.04642', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lobonok', payamCode: 'SS010109', name: 'Lobonok Phcc', type: 'PHCC', location:  '4.17706,  31.37249', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lokiliri', payamCode: 'SS010108', name: 'Lokiliri Phcc', type: 'PHCC', location:  '4.5736300000000005,  31.93691', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Kator', payamCode: 'SS010106', name: 'Lologo Phcc', type: 'PHCC', location:  '4.81729,  31.59564', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lokiliri', payamCode: 'SS010108', name: 'Lomega Phcu', type: 'PHCU', location:  '4.5529219,  31.9736735', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Luri Rokwe Phcu', type: 'PHCU', location:  '4.89822,  31.59559', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Luri-Somba Phcu', type: 'PHCU', location:  '4.88728,  31.40317', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Lutheran Phcc', type: 'PHCC', location:  '4.8882493,  31.5636314', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Mahad Phcu', type: 'PHCU', location:  '4.8222499999999995,  31.59663', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Kator', payamCode: 'SS010106', name: 'Malakia Phcc', type: 'PHCC', location:  '4.83763,  31.60361', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Mangala North', payamCode: 'SS010117', name: 'Mangalla Phcc', type: 'PHCC', location:  '5.1965699999999995,  31.76872', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Mangateen 2 Clinic', type: 'Clinic', location:  '4.8874378,  31.5794754', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Mangaten Phcu', type: 'PHCU', location:  '4.8874235,  31.5696197', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Medicare Hospital', type: 'Hospital', location:  '4.8655107,  31.554614', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rokon', payamCode: 'SS010114', name: 'Mirikio Phcc', type: 'PHCC', location:  '4.84546,  31.58017', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Mangala South', payamCode: 'SS010110', name: 'Mogiri/Jobur Phcc', type: 'PHCC', location:  '4.88839,  31.85532', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Munuki Phcc', type: 'PHCC', location:  '4.863479999999999,  31.57933', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lokiliri', payamCode: 'SS010108', name: 'Nesitu Phcu', type: 'PHCU', location:  '4.69103,  31.70485', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lirya', payamCode: 'SS010107', name: 'Ngangalla Phcu', type: 'PHCU', location:  '4.706460000000001,  31.91963', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Nyakuron Phcc', type: 'PHCC', location:  '4.84602,  31.57908', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lokiliri', payamCode: 'SS010108', name: 'Nyerjebi Phcu', type: 'PHCU', location:  '4.53948,  31.82554', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Nyuwa Phcu', type: 'PHCU', location:  '5.025874999999999,  31.651052', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Lobonok', payamCode: 'SS010109', name: 'Pager Phcc', type: 'PHCC', location:  '4.20197,  31.63442', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Peiti Phcc', type: 'PHCC', location:  '5.057312,  31.66966', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rokon', payamCode: 'SS010114', name: 'Pirisa Phcu', type: 'PHCU', location:  '5.1768,  31.03338', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Rajaf East Phcc', type: 'PHCC', location:  '4.698509999999999,  31.29396', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Rejaf West Phcc', type: 'PHCC', location:  '4.7287565,  31.5920183', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rokon', payamCode: 'SS010114', name: 'Rokon Phcc', type: 'PHCC', location:  '4.8588208,  31.5865994', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Kator', payamCode: 'SS010106', name: 'Sacred Heart Phcc', type: 'PHCC', location:  '4.8278606,  31.6017546', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rokon', payamCode: 'SS010114', name: 'Sereng Phcu', type: 'PHCU', location:  '4.8511,  31.58533', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Sirimon Phcu', type: 'PHCU', location:  '5.0158499999999995,  31.113195', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'St.Kizito Phcc', type: 'PHCC', location:  '4.860079999999999,  31.57175', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Sure Phcu', type: 'PHCU', location:  '4.84409,  31.5849', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rokon', payamCode: 'SS010114', name: 'Toko-Ko-Tulu Phcu', type: 'PHCU', location:  '4.948493000000001,  30.914018', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Usratuna Phcc', type: 'PHCC', location:  '4.8468206,  31.6050231', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Walawalang Phcu', type: 'PHCU', location:  '4.882179999999999,  31.62256', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Way Station Phcu', type: 'PHCU', location:  '4.815574,  31.5600894', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Juba County', countyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Wonduruba Phcc', type: 'PHCC', location:  '4.54572,  33.0033', functionality: 'Moderately Functional', supported: 'Supported' },



    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Abaya Phcu', type: 'PHCU', location:  '3.6467867,  31.6165576', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Ajio Phcu', type: 'PHCU', location:  '3.8384773,  31.1953635', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Bori Phcc', type: 'PHCC', location:  '3.7740053,  31.510205', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Jalimo Phcc', type: 'PHCC', location:  '3.759675,  31.5990489', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Kajo Keji Civil Hospital', type: 'Hospital', location:  '3.8536143,  31.6565057', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Kangai Phcc', type: 'PHCC', location:  '3.7689018,  31.6569244', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Nyepo', payamCode: 'SS010205', name: 'Kansuk Phcc', type: 'PHCC', location:  '4.0109556,  31.5353132', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Kerwa Phcu', type: 'PHCU', location:  '3.8014399,  31.3068508', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Kinyiba Phcu', type: 'PHCU', location:  '3.8216601,  31.5813263', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Kiri Phcu', type: 'PHCU', location:  '3.7728553,  31.6368063', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Leikor Phcu', type: 'PHCU', location:  '3.8078491,  31.6658959', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Lijo Healing Kadi Phcc', type: 'PHCC', location:  '3.7801013,  31.6673952', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Limi Phcu', type: 'PHCU', location:  '3.8028143,  31.7151213', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Lire Phcc', type: 'PHCC', location:  '3.8965935,  31.6202382', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Litoba Phcu', type: 'PHCU', location:  '3.738447,  31.683778', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Logu Phcu', type: 'PHCU', location:  '3.8356038,  31.6188686', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Lomin Phcc', type: 'PHCC', location:  '3.8247913,  31.6593606', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Longira Phcu', type: 'PHCU', location:  '3.8784736,  31.6016716', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Mere Phcu', type: 'PHCU', location:  '3.88952,  31.67249', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Merewa Phcc', type: 'PHCC', location:  '3.9070548,  31.6274159', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Mogiri Phcu', type: 'PHCU', location:  '3.9506846,  31.5954305', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Mondikolok Phcu', type: 'PHCU', location:  '3.9143225,  31.6267466', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Romogi Phcu', type: 'PHCU', location:  '3.9083621,  31.6497019', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Saregoro Phcu', type: 'PHCU', location:  '3.8442145,  31.6790093', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Sera Jale Phcu', type: 'PHCU', location:  '3.7344292,  31.6347148', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Sokare Phcu', type: 'PHCU', location:  '3.7949685,  31.4298857', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Tirye Phcu', type: 'PHCU', location:  '3.7709627,  31.3142738', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Lainya', payamCode: 'SS010303', name: 'Bereka Phcu', type: 'PHCU', location:  '4.39846,  31.04184', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Kupera', payamCode: 'SS010302', name: 'Ginyabio Phcu', type: 'PHCU', location:  '3.9799347,  30.9694419', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Kupera', payamCode: 'SS010302', name: 'Jamara Phcc', type: 'PHCC', location:  '4.04734,  30.98237', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Kenyi', payamCode: 'SS010301', name: 'Kenyi Phcu', type: 'PHCU', location:  '4.20651,  30.91298', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Kupera', payamCode: 'SS010302', name: 'Kupera Phcu', type: 'PHCU', location:  '4.133344,  30.953781', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Lainya', payamCode: 'SS010303', name: 'Lainya Phcc', type: 'PHCC', location:  '4.34059,  31.07442', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Kenyi', payamCode: 'SS010301', name: 'Limbe Phcc', type: 'PHCC', location:  '4.16106,  30.86092', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Wuji', payamCode: 'SS010305', name: 'Limuro Phcu', type: 'PHCU', location:  '4.05827,  31.05803', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Lainya', payamCode: 'SS010303', name: 'Logwili Phcu', type: 'PHCU', location:  '4.37008,  31.12116', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Lainya', payamCode: 'SS010303', name: 'Loka Round Phcu', type: 'PHCU', location:  '4.27317,  31.0196', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Kenyi', payamCode: 'SS010301', name: 'Loka West Phcu', type: 'PHCU', location:  '4.2522257,  30.9973707', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Kenyi', payamCode: 'SS010301', name: 'Lomilikin Phcu', type: 'PHCU', location:  '4.2230746,  30.9583198', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Lainya', payamCode: 'SS010303', name: 'St Luke Phcc', type: 'PHCC', location:  '4.3393069,  31.069034', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Wuji', payamCode: 'SS010305', name: 'Wuji Phcu', type: 'PHCU', location:  '3.84054,  31.07676', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Lainya County',  CountycountyCode: 'SS0103', payam: 'Mukaya', payamCode: 'SS010304', name: 'Yondoru Phcu', type: 'PHCU', location:  '4.22023,  30.76613', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Wudabi', payamCode: 'SS010405', name: 'Aloto Rural Phcu', type: 'PHCU', location:  '3.7497133,  30.6249569', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Lujulo', payamCode: 'SS010403', name: 'Aworo/Aboroto Phcc', type: 'PHCC', location:  '3.6604429,  30.7098872', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Kimba', payamCode: 'SS010402', name: 'Kaya Phcc', type: 'PHCC', location:  '3.54158,  30.88163', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Gulumbi', payamCode: 'SS010401', name: 'Kendila Phcu', type: 'PHCU', location:  '3.7450302,  30.8607783', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Gulumbi', payamCode: 'SS010401', name: 'Morobo Phcc', type: 'PHCC', location:  '3.68784,  30.77521', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Lujulo', payamCode: 'SS010403', name: 'Panyana Phcu', type: 'PHCU', location:  '3.6543711,  30.6826657', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Panyume', payamCode: 'SS010404', name: 'Panyume Phcu', type: 'PHCU', location:  '3.78104,  30.9509', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Morobo County',  CountycountyCode: 'SS0104', payam: 'Gulumbi', payamCode: 'SS010401', name: 'Rodoba Phcu', type: 'PHCU', location:  '3.6001000000000003,30.80723', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Atiit Phcu', type: 'PHCU', location:  '5.89566,  30.77165', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Muni', payamCode: 'SS010502', name: 'Bekat Phcu', type: 'PHCU', location:  '5.6414415,  31.6894989', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Dari Phcu', type: 'PHCU', location:  '6.005879999999999,  30.75563', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Terekeka', payamCode: 'SS010507', name: 'Digala Phcc', type: 'PHCC', location:  '5.4350694,  31.7495463', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Gameiza', payamCode: 'SS010501', name: 'Gemeiza Phcu', type: 'PHCU', location:  '5.6801948,  31.7977968', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Gwulukuk Phcu', type: 'PHCU', location:  '5.436049,  31.542209', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Jobem Phcu', type: 'PHCU', location:  '5.3822078,  31.6800816', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Rijong', payamCode: 'SS010505', name: 'Jonkok Phcu', type: 'PHCU', location:  '5.2916300000000005,  31.02493', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Kirot Nyumbo Phcu', type: 'PHCU', location:  '5.609374,  31.033016', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Kiu/Kiyu Phcu', type: 'PHCU', location:  '6.20479,  30.60062', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Rijong', payamCode: 'SS010505', name: 'Kowori Phcu', type: 'PHCU', location:  '5.394069999999999,  31.1092', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Nyori', payamCode: 'SS010503', name: 'Kuda Phcu', type: 'PHCU', location:  '5.1429487,  31.7126188', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Kutuk Na Woko Phcu', type: 'PHCU', location:  '5.314399999999999,  31.35', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Kwornyang Phcu', type: 'PHCU', location:  '5.543220000000001,  31.54302', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Lengi Phcu', type: 'PHCU', location:  '5.4796798,  31.4374915', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Lojora Phcu', type: 'PHCU', location:  '5.3821482,  31.6801006', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Lowirja Phcu', type: 'PHCU', location:  '5.5367247,  31.5205493', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Mading Phcu', type: 'PHCU', location:  '5.85209,  30.79235', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Makamagor Phcu', type: 'PHCU', location:  '5.4903761,  31.6181575', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Makido Phcu', type: 'PHCU', location:  '5.962829999999999,  30.74117', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Mijiki Phcu', type: 'PHCU', location:  '5.723949999999999,  30.84106', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Molosuk Phcu', type: 'PHCU', location:  '5.4284077,  31.6620087', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Nyori', payamCode: 'SS010503', name: 'Moridi Phcu', type: 'PHCU', location:  '5.3381887,  31.6866014', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tindilo', payamCode: 'SS010508', name: 'Mundari Bura Phcc', type: 'PHCC', location:  '5.67265,  30.97458', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Muni', payamCode: 'SS010502', name: 'Muni Phcc', type: 'PHCC', location:  '5.6440143,  31.7202054', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tindilo', payamCode: 'SS010508', name: 'Nyanga Phcu', type: 'PHCU', location:  '5.76809,  31.04181', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Terekeka', payamCode: 'SS010507', name: 'Nyikabur Phcu', type: 'PHCU', location:  '5.5532658,  31.7107822', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Nyori', payamCode: 'SS010503', name: 'Nyori Phcu', type: 'PHCU', location:  '5.3176458,  31.7605905', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Pagara Phcu', type: 'PHCU', location:  '6.01279,  30.66555', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tindilo', payamCode: 'SS010508', name: 'Peri Phcu', type: 'PHCU', location:  '5.60376,  31.82794', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Rijong', payamCode: 'SS010505', name: 'Rijong Phcc', type: 'PHCC', location:  '5.5144821,  31.3281692', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Tali Phcc', type: 'PHCC', location:  '5.897539999999999,  30.77169', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Terekeka', payamCode: 'SS010507', name: 'Terekeka Phcc', type: 'PHCC', location:  '5.4558705,  31.754778', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tombek', payamCode: 'SS010509', name: 'Tombek Phcc', type: 'PHCC', location:  '5.8112051,  31.6849685', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Muni', payamCode: 'SS010502', name: 'Tukoro Phcu', type: 'PHCU', location:  '5.5848704,  31.7169175', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' ,countyCode: 'SS0105',payam: 'Gameiza',payamCode: 'SS010501',name: 'Wanyang Phcu',type: 'PHCU',location:  '5.3955223, 31.8057352',functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Tombek', payamCode: 'SS010509', name: 'Wudu Bori Phcu', type: 'PHCU', location:  '5.7423474,  31.7007594', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Terekeka County' , countyCode: 'SS0105', payam: 'Muni', payamCode: 'SS010502', name: 'Yebisak Phcu', type: 'PHCU', location:  '5.6777247,  31.7305595', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Abegi Phcu', type: 'PHCU', location:  '4.0110173,  30.5634675', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Epc Phcc', type: 'PHCC', location:  '4.0951281,  30.6870469', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Gimunu Phcu', type: 'PHCU', location:  '4.123479999999999,  30.76824', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Goja Phcu', type: 'PHCU', location:  '4.0064,  30.63631', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Hamia Phcc', type: 'PHCC', location:  '4.1007672,  30.7018727', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Jansuk Phcu', type: 'PHCU', location:  '4.1133951,  30.6464657', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Kagelu Phcu', type: 'PHCU', location:  '4.0516663,  30.6119917', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Lasu', payamCode: 'SS010601', name: 'Lasu Phcc', type: 'PHCC', location:  '3.9495881,  30.4671369', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Logo Phcu', type: 'PHCU', location:  '4.1416426,  30.5461716', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Logobero Phcu', type: 'PHCU', location:  '4.124489999999999,  30.66957', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Martha Phcc', type: 'PHCC', location:  '4.097428,  30.667819', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Minyori Phcu', type: 'PHCU', location:  '4.125279999999999,  30.62005', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Morsak Phcc', type: 'PHCC', location:  '3.9412744,  30.6110977', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Mugwo', payamCode: 'SS010602', name: 'Mugwo Phcc', type: 'PHCC', location:  '3.889823,  30.74011', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Lasu', payamCode: 'SS010601', name: 'Nyori Phcu', type: 'PHCU', location:  '3.9400581,  30.4239539', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Ombasi Phcc', type: 'PHCC', location:  '3.8889463,  30.6078737', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Pakula Phcu', type: 'PHCU', location:  '4.04056,  30.87171', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Mugwo', payamCode: 'SS010602', name: 'Payawa Phcu', type: 'PHCU', location:  '3.9535839,  30.7390391', functionality: 'Highly Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Lasu', payamCode: 'SS010601', name: 'Pisak Phcu', type: 'PHCU', location:  '4.1003867,  30.6956183', functionality: 'Highly Functional', supported: 'Supported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Rubeke Phcu', type: 'PHCU', location:  '3.9792024,  30.5427538', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Rwonyi Phcu', type: 'PHCU', location:  '4.0556148,  30.7144162', functionality: 'Moderately Functional', supported: 'Unsupported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'St Bakhita Phcc', type: 'PHCC', location:  '4.1031949999999995,  30.632383', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Yei County',  CountyntyCode: 'SS0106', payam: 'Yei', payamCode: 'SS010605', name: 'Yei Civil Hospital', type: 'Hospital', location:  '4.09133,  30.6756', functionality: 'Moderately Functional', supported: 'Supported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Al Amin Hospital', type: 'Hospital', location:  '4.84564,  31.57315', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Aspen Medical International Hospital', type: 'Hospital', location:  '4.8594,  31.60645', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Belpham Military Phcc', type: 'PHCC', location:  '4.8189,  31.57712', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Bilingi Phcu', type: 'PHCU', location:  '4.90331,  31.37985', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Mangala South', payamCode: 'SS010110', name: 'Bilinyang Phcu', type: 'PHCU', location:  '4.85554,  31.77682', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Chinafriendship Hospital', type: 'Hospital', location:  '4.86158,  31.60057', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Kator', payamCode: 'SS010106', name: 'Da Geneisis Hospital', type: 'Hospital', location:  'NA,  NA', functionality: 'Unknown', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Dokuni Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Don Bosco Phcc', type: 'PHCC', location:  'NA,  NA', functionality: 'Unknown', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Eb Clinic', type: 'Clinic', location:  'NA,  NA', functionality: 'Unknown', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Ganji', payamCode: 'SS010103', name: 'Ganji Phcc', type: 'PHCC', location:  '4.45425,  31.20977', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Tijor', payamCode: 'SS010115', name: 'Gurulotogu Phcu', type: 'PHCU', location:  '5.19838,  31.1993', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Rejaf', payamCode: 'SS010113', name: 'Juba Poc', type: 'PHCU', location:  '4.819422161,  31.53843572', functionality: 'Unknown', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Imc Un House Clinic 3', type: 'Clinic', location:  '4.8647,  31.55846', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'International Hospital', type: 'Hospital', location:  '4.84202,  31.61117', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Lokiliri', payamCode: 'SS010108', name: 'Jalite Gikokue Phcu', type: 'PHCU', location:  '4.68939,  31.85753', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Jokari Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Jondoki Phcc', type: 'PHCC', location:  'NA,  NA', functionality: 'Unknown', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Juba Medical Complex Hospital', type: 'Hospital', location:  '4.84773,  31.60932', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Ganji', payamCode: 'SS010103', name: 'Kagwada Phcu', type: 'PHCU', location:  '4.45423,  31.20977', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Lobonok', payamCode: 'SS010109', name: 'Karpeto Phcu', type: 'PHCU', location:  '4.115858,  31.70234', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Katigiri Phcc', type: 'PHCC', location:  '4.89349,  30.83171', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Kera Phcc', type: 'PHCC', location:  '4.89303,  30.83391', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Kimu Phcc', type: 'PHCC', location:  '4.87357,  31.56001', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Ganji', payamCode: 'SS010103', name: 'Kuli Papa Phcu', type: 'PHCU', location:  '4.374879,  31.116599', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Kutali Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Lobonok', payamCode: 'SS010109', name: 'Langi Phcu', type: 'PHCU', location:  '4.36341,  31.32724', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Tijor', payamCode: 'SS010115', name: 'Ligi Phcu', type: 'PHCU', location:  '5.09218,  31.30161', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Logwerle Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Lotemba Phcu', type: 'PHCU', location:  '4.73875,  30.93536', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Madikolok Phcu', type: 'PHCU', location:  '4.77947,  30.921', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Mangele Phcu', type: 'PHCU', location:  '4.63671,  30.94056', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Mankaro Phcu', type: 'PHCU', location:  '4.60194,  30.96091', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Mawuna Hospital', type: 'Hospital', location:  '4.85417,  31.57724', functionality: 'Not Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'Mobil Phcu', type: 'PHCU', location:  '4.95897,  31.63436', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Wonduruba', payamCode: 'SS010116', name: 'Moje Phcu', type: 'PHCU', location:  '4.46051,  31.02675', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Mondikolok Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Gondokoro', payamCode: 'SS010104', name: 'Monoji Phcu', type: 'PHCU', location:  '4.8750135,  31.6374726', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Lobonok', payamCode: 'SS010109', name: 'Morsack Phcu', type: 'PHCU', location:  '4.23256,  31.35609', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Northern Bari', payamCode: 'SS010112', name: 'New Site Phcc', type: 'PHCC', location:  '4.89733,  31.58935', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Lirya', payamCode: 'SS010107', name: 'Ngulere Phcu', type: 'PHCU', location:  '4.69222,  31.96334', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Nyamini Phcu', type: 'PHCU', location:  '4.93129,  31.3396', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Lobonok', payamCode: 'SS010109', name: 'Nyarjuw Phcu', type: 'PHCU', location:  '4.26681,  31.35286', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Roja Phcu', type: 'PHCU', location:  '4.81554,  30.88008', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Munuki', payamCode: 'SS010111', name: 'Sda Phcc', type: 'PHCC', location:  '4.8564,  31.57839', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Kator', payamCode: 'SS010106', name: 'Three Angle Phcc', type: 'PHCC', location:  'NA,  NA', functionality: 'Unknown', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Tijor', payamCode: 'SS010115', name: 'Tijor Centre Phcc', type: 'PHCC', location:  '5.25926,  31.23755', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Dolo', payamCode: 'SS010102', name: 'Tulyang Phcu', type: 'PHCU', location:  '4.77947,  30.92111', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'Victoria Medical Hospital', type: 'Hospital', location:  '4.839,  31.60794', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Juba County', CountyuntyCode: 'SS0101', payam: 'Lobonok', payamCode: 'SS010109', name: 'Yapa Phcu', type: 'PHCU', location:  '4.8402757,  31.5990144', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Ajira Phcu', type: 'PHCU', location:  '3.85206,  31.65614', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Bamurye Phcu', type: 'PHCU', location:  '3.66828,  31.54816', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Boro Boro Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Nyepo', payamCode: 'SS010205', name: 'Gaderu Phcc', type: 'PHCC', location:  '3.93852,  31.50059', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Gendressa Phcc', type: 'PHCC', location:  '3.84892,  31.65816', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Gurujo Phcu', type: 'PHCU', location:  '3.72624,  31.58257', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Nyepo', payamCode: 'SS010205', name: 'Jondale Phcu', type: 'PHCU', location:  '3.92903,  31.53512', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Kala Phcu', type: 'PHCU', location:  '3.9824,  31.25885', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Kasurak Phcu', type: 'PHCU', location:  '3.86267,  31.53883', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Kigwo Phcu', type: 'PHCU', location:  '3.86979,  31.73908', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Kinyiba Phcc', type: 'PHCC', location:  '3.821578333,  31.58131167', functionality: 'Unknown', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Lire', payamCode: 'SS010203', name: 'Kudaji Phcu', type: 'PHCU', location:  '3.88419,  31.67036', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Logili Phcu', type: 'PHCU', location:  '3.8436,  31.63751', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Lora Phcu', type: 'PHCU', location:  '3.88119,  31.3316', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Nyepo', payamCode: 'SS010205', name: 'Lori Phcu', type: 'PHCU', location:  '4.00609,  31.50674', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Loro Phcu', type: 'PHCU', location:  '3.86989,  31.16668', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Liwolo', payamCode: 'SS010204', name: 'Mangalotore Phcu', type: 'PHCU', location:  '3.80212,  31.55097', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Mereguga Phcu', type: 'PHCU', location:  '3.76942,  31.4869', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Moijo Phcu', type: 'PHCU', location:  '3.80469,  31.79352', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Nyepo', payamCode: 'SS010205', name: 'Mondi Phcu', type: 'PHCU', location:  '3.89376,  31.48438', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo I', payamCode: 'SS010201', name: 'Orphanage Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Nyepo', payamCode: 'SS010205', name: 'Rodo Phcu', type: 'PHCU', location:  '4.04306,  31.5245', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Kajo-Keji County',countyCode: 'SS0102',payam: 'Liwolo',payamCode: 'SS010204',name: 'Rungetta Phcu',type: 'PHCU',location:  '3.78321, 31.36911',functionality: 'Limitedly Functional',supported: 'Unsupported' },
    {county: 'Kajo-Keji County', countyCode: 'SS0102', payam: 'Kangapo II', payamCode: 'SS010202', name: 'Wurta Phcu', type: 'PHCU', location:  '3.69507,  31.55215', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County', countyCode: 'SS0103', payam: 'Mukaya', payamCode: 'SS010304', name: 'Dimo One Phcu', type: 'PHCU', location:  '4.23393,  30.674', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County', countyCode: 'SS0103', payam: 'Mukaya', payamCode: 'SS010304', name: 'Komoi Phcu', type: 'PHCU', location:  '4.14465,  30.68983', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County', countyCode: 'SS0103', payam: 'Wuji', payamCode: 'SS010305', name: 'Koyoki Phcc', type: 'PHCC', location:  '3.84026,  31.07665', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County', countyCode: 'SS0103', payam: 'Kenyi', payamCode: 'SS010301', name: 'Loka Orphanage Phcu', type: 'PHCU', location:  '4.22309,  30.95825', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County', countyCode: 'SS0103', payam: 'Kenyi', payamCode: 'SS010301', name: 'Lora Phcc', type: 'PHCC', location:  '4.22372,  30.95829', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County', countyCode: 'SS0103', payam: 'Mukaya', payamCode: 'SS010304', name: 'Roronyo Phcc', type: 'PHCC', location:  '4.24175,  30.71605333', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Lainya County', countyCode: 'SS0103', payam: 'Mukaya', payamCode: 'SS010304', name: 'Soka Phcu', type: 'PHCU', location:  '4.20971,  30.54994', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Morobo County', countyCode: 'SS0104', payam: 'Wudabi', payamCode: 'SS010405', name: 'Geri Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Morobo County', countyCode: 'SS0104', payam: 'Kimba', payamCode: 'SS010402', name: 'Kimba Phcu', type: 'PHCU', location:  '3.5851,  30.85059', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Morobo County', countyCode: 'SS0104', payam: 'Lujulo', payamCode: 'SS010403', name: 'Lujulo Phcu', type: 'PHCU', location:  '3.67869,  30.66458', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Morobo County', countyCode: 'SS0104', payam: 'Wudabi', payamCode: 'SS010405', name: 'Wudabi Phcu', type: 'PHCU', location:  '3.77297,  30.61897', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Morobo County', countyCode: 'SS0104', payam: 'Panyume', payamCode: 'SS010404', name: 'Yaribe Phcu', type: 'PHCU', location:  '3.89736987,  30.98097739', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Morobo County', countyCode: 'SS0104', payam: 'Kimba', payamCode: 'SS010402', name: 'Yondu Phcu', type: 'PHCU', location:  '3.66275,  30.89825', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Morobo County', countyCode: 'SS0104', payam: 'Lujulo', payamCode: 'SS010403', name: 'Yugufe Phcu', type: 'PHCU', location:  '3.71576,  30.69331', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Terekeka County', countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Bura Phcu', type: 'PHCU', location:  '5.4456286,  31.3782318', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Terekeka County', countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Comboni Phcu', type: 'PHCU', location:  '5.89393,  30.77194', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Terekeka County', countyCode: 'SS0105', payam: 'Terekeka', payamCode: 'SS010507', name: 'Lokweni Phcu', type: 'PHCU', location:  '5.48071,  31.72853', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Terekeka County', countyCode: 'SS0105', payam: 'Nyori', payamCode: 'SS010503', name: 'Lwoki Phcu', type: 'PHCU', location:  '5.25408,  31.72815', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Terekeka County', countyCode: 'SS0105', payam: 'Tali', payamCode: 'SS010506', name: 'Mina Phcu', type: 'PHCU', location:  '5.80288,  30.74172', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Terekeka County', countyCode: 'SS0105', payam: 'Reggo', payamCode: 'SS010504', name: 'Wujugani Phcu', type: 'PHCU', location:  '5.51012,  31.71095', functionality: 'Limitedly Functional', supported: 'Unsupported' },


    {county: 'Yei County', countyCode: 'SS0106', payam: 'Lasu', payamCode: 'SS010601', name: 'Agonyakiri Phcu', type: 'PHCU', location:  '3.92847,  30.51439', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Tore', payamCode: 'SS010604', name: 'Angebi Phcu', type: 'PHCU', location:  '4.60881,  29.97756', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Tore', payamCode: 'SS010604', name: 'Bandame Phcu', type: 'PHCU', location:  '4.32303,  30.28638', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Tore', payamCode: 'SS010604', name: 'Goli Phcu', type: 'PHCU', location:  '4.20158,  30.44958', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Mugwo', payamCode: 'SS010602', name: 'Jombu Phcu', type: 'PHCU', location:  '3.8114,  30.78049', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Kajiko Phcu', type: 'PHCU', location:  '3.8512,  30.59903', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Lasu', payamCode: 'SS010601', name: 'Kirikwa Phcu', type: 'PHCU', location:  '4.14312,  30.42503', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Tore', payamCode: 'SS010604', name: 'Kundru Phcu', type: 'PHCU', location:  '4.39805,  30.21588', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Latta Phcu', type: 'PHCU', location:  '3.87902,  30.55857', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Lasu', payamCode: 'SS010601', name: 'Libogo Phcu', type: 'PHCU', location:  '3.80443,  30.57259', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Tore', payamCode: 'SS010604', name: 'Lorumba Phcu', type: 'PHCU', location:  'NA,  NA', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Tore', payamCode: 'SS010604', name: 'Mapako Phcu', type: 'PHCU', location:  '4.22541,  30.53754', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Lasu', payamCode: 'SS010601', name: 'Matika Phcu', type: 'PHCU', location:  '3.95822,  30.50643', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Mongo Phcu', type: 'PHCU', location:  '3.90436,  30.61155', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Otogo', payamCode: 'SS010603', name: 'Senema Phcu', type: 'PHCU', location:  '4.09031,  30.68906', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Tore', payamCode: 'SS010604', name: 'Tore Phcc', type: 'PHCC', location:  '4.49133,  30.16275', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Mugwo', payamCode: 'SS010602', name: 'Undukori Phcu', type: 'PHCU', location:  '3.94013,  30.6901', functionality: 'Limitedly Functional', supported: 'Unsupported' },
    {county: 'Yei County', countyCode: 'SS0106', payam: 'Mugwo', payamCode: 'SS010602', name: 'Wadupe Phcu', type: 'PHCU', location:  '3.88672,  30.7075', functionality: 'Limitedly Functional', supported: 'Unsupported'},
    
   
      // ... other facilities for Central Equatoria
    ],
    'Eastern Equatoria State': [
      {county: 'Budi County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'IKotos County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Kapoeta East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Kapoeta North County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Kapoeta South County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Lafon County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Magwai County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Torit County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

    ],
    'Jonglei State': [
      {county: 'Akobo County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Ayod County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Bor South County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Duk County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Fangak County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Nyirol County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Pigi County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Twic East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Uror County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
    ],
    'Lakes State': [
      {county: 'Awerial County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Cueibet County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Rumbek Centre County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Rumbek East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'RUmbek North County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Wulu County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Yirol East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Yirol West County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

    
    ],
    'Northern Bahr El Ghazal State': [
      {county: 'Aweil Centre County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Aweil East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Aweil North County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Aweil SouthCounty', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Aweil West County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

    ],

    'Pibor Administrative Area': [
      {county: 'Pibor County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Pochalla County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

    ],

    'Ruweng Administrative Area': [
      {county: 'Abiemnhom County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Pariang County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

    ],

    'Unity State': [
      {county: 'Guit County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
 
      {county: 'Koch County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
      
      {county: 'Leer County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'MayenDit County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Mayom County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Panyijar County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
      
      {county: 'Rubkona County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

  
  

    ],
    
    'Upper Nile State': [
      {county: 'Akoka County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
 
      {county: 'Baliet County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
      
      {county: 'Fashoda County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Longochuk County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Luakpiny / Nasir County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Maban County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
      
      {county: 'Maiwut County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Malakal County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
 
      {county: 'Manyo County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
      
      {county: 'Melut  County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Panyikang County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
 
      {county: 'Renk County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },
      
      {county: 'Ulang  County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },


     


    ],
     'Warrap State': [

      {county: 'Gogrial East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Gogrial West County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Tonj East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Tonj North County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Tonj South County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Twic County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

     ],

    'Western Bahr El Ghazal State' : [
      { county: 'Jur River County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Abyei Civil Hospital', type: 'Hospital', location: '9.5920517,28.4362648', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Raga County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Abyei Civil Hospital', type: 'Hospital', location: '9.5920517,28.4362648', functionality: 'Moderately Functional', supported: 'Unsupported' },
      { county: 'Wau County', 'countyCode': 'SS0001', payam: 'Abyei Payam', payamCode: 'SS000101', name: 'Abyei Civil Hospital', type: 'Hospital', location: '9.5920517,28.4362648', functionality: 'Moderately Functional', supported: 'Unsupported' },

    ],

    'Western Equatoria State': [
      {county: 'Ezo County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Ibba County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Maridi County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Mundri East County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Mundri West County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Mvolo County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Nagero County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Nzara County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Tambura County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

      {county: 'Yambio County', countyCode: 'SS0101', payam: 'Juba Town', payamCode: 'SS010105', name: 'African Inland Church Phcc', type: 'PHCC', location:  '4.8472478,  31.5988488', functionality: 'Moderately Functional', supported: 'Unsupported' },

    ],
    // Add other states as needed...
  };

  // Loop through each selected state and generate data for them
  selectedStates.forEach((selectedState) => {
    // Set counties for the selected state
    counties = stateCountiesMap[selectedState] || [];

    // Combine manual data for the selected state
    const manualFacilities = manualData[selectedState] || [];

    // Loop through and add manual data first
    manualFacilities.forEach((facilityData, index) => {
      const facility = {
        id: index + 1,
        name: facilityData.name,
        state: selectedState,
        county: facilityData.county,
        countyCode: facilityData.countyCode,
        payam: facilityData.payam,
        type: facilityData.type,
        location: facilityData.location,
        owner: 'Public', // Default ownership is public
        status: 'Functional', // Default status is functional
        support: 'Government', // Default support is Government
        facilityId: `${selectedState.substring(0, 3).toUpperCase()}-${facilityData.county.substring(0, 3).toUpperCase()}-${index + 1}`,
        dateOfEstablishment: '1972-01-01', // Set the Date of Establishment to 1972-01-01 for all facilities
      };

      // Set operation hours based on facility type
      if (facilityData.type === 'Hospital') {
        facility.open24Hours = 24; // Hospitals are open 24 hours
      } else if (facilityData.type === 'PHCC' || facilityData.type === 'PHCU') {
        facility.open24Hours = 8; // PHCC and PHCU operate 8 hours
      }

      data.push(facility);
    });
  });

  return data;
};

// Example usage where you can now select multiple states dynamically
var selectedStates = ['Abyei Administrative Area', 'Central Equatoria State', 'Eastern Equatoria State', 'Jonglei State',
    'Lakes State', 'Northern Bahr El Ghazal State', 'Pibor Administrative Area', 'Ruweng Administrative Area',
    'Unity State', 'Upper Nile State', 'Warrap State', 'Western Bahr El Ghazal State', 'Western Equatoria State'];

export const facilitiesData = generateData('Facility', selectedStates);
export const bomasData = generateData('Boma', selectedStates);

// Make all boma ownership 'Public'
bomasData.forEach(boma => {
  boma.owner = 'Public';
});

console.log(facilitiesData);
console.log(bomasData);
