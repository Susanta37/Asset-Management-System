const data = {
    totals: {
      totalAssets: 231,
      totalComponents: 2424698,
      totalMaintenance: 237,
      totalEmployees: 79
    },
    assetTypes: [
      { type: "Hardwares", count: 20 },
      { type: "Extrusion", count: 15 },
      { type: "Notebook", count: 10 },
      { type: "AUTOMATIC TRANSFER SWITCH", count: 5 },
      { type: "SWITCHGEAR", count: 12 },
      { type: "TRANSFORMER", count: 8 },
      { type: "STRING BATTERY", count: 9 },
      { type: "IT Racks", count: 6 },
      { type: "FABD", count: 7 },
      { type: "UPS", count: 11 },
      { type: "Chair", count: 14 },
      { type: "TWO POST LIFTS", count: 3 },
      { type: "WHEEL ALIGNER", count: 4 },
      { type: "Laptop", count: 18 },
      { type: "Software", count: 15 }
    ],
    assetStatus: [
      { status: "Ready to deploy", count: 80 },
      { status: "Pending", count: 50 },
      { status: "Archived", count: 30 },
      { status: "Broken", count: 20 },
      { status: "Lost", count: 10 },
      { status: "Out of repair", count: 41 }
    ],
    recentAssetActivity: [
      {
        asset: "TOOL",
        employee: "YEE",
        status: "Check out",
        location: "Gasha high school - Erbil",
        date: "2024-07-10"
      },
      {
        asset: "TOOL",
        employee: "YEE",
        status: "Check in",
        location: "Gasha high school - Erbil",
        date: "2024-07-05"
      }
    ],
    recentComponentActivity: [
      {
        component: "tf",
        asset: "TESTING",
        quantity: 1,
        status: "Check in",
        location: "Gasha high school - Erbil",
        date: "2024-07-10"
      },
      {
        component: "tf",
        asset: "TESTING",
        quantity: 0,
        status: "Check out",
        location: "Gasha high school - Erbil",
        date: "2024-07-05"
      }
    ]
  };
// data.js
export const componentData = [
  {
    picture: 'https://rukminim2.flixcart.com/image/850/1000/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=90&crop=false',
    name: 'Camera',
    type: 'Hardwares',
    brand: 'Cannon',
    quantity: 1,
    availableQuantity: 1
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9lYTakBxDl_HdYDXy-YtTvofxxPtLl0eUA&s',
    name: 'Laptop',
    type: 'Extrusion',
    brand: 'HP',
    quantity: 123,
    availableQuantity: 123
  },
  {
    picture: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/11/microsd-card.jpg',
    name: 'tf',
    type: 'Hardwares',
    brand: 'Micr SD',
    quantity: 1234,
    availableQuantity: 1000
  },
  {
    picture: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-320m-mouse/assets/mouse-alienware-aw320m-black-gallery-5.psd?fmt=pjpg&pscan=auto&scl=1&wid=2159&hei=1540&qlt=100,1&resMode=sharp2&size=2159,1540&chrss=full&imwidth=5000',
    name: ' Mouse',
    type: 'Hardwares',
    brand: 'Hp',
    quantity: 100,
    availableQuantity: 0
  },
  {
    picture: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=20&crop=false',
    name: 'Keyboard',
    type: 'Electronics',
    brand: 'Samsung',
    quantity: 50,
    availableQuantity: 45
  },
  {
    picture: 'https://via.placeholder.com/150',
    name: 'Another Component',
    type: 'Mechanics',
    brand: 'Bosch',
    quantity: 200,
    availableQuantity: 180
  }, {
    picture: 'https://via.placeholder.com/150',
    name: 'TOOL',
    type: 'Hardwares',
    brand: 'Epson',
    quantity: 1,
    availableQuantity: 1
  },
  {
    picture: 'https://via.placeholder.com/150',
    name: 'tes',
    type: 'Extrusion',
    brand: 'Epson',
    quantity: 123,
    availableQuantity: 123
  },
  {
    picture: 'https://via.placeholder.com/150',
    name: 'tf',
    type: 'Hardwares',
    brand: 'Epson',
    quantity: 1234,
    availableQuantity: 1000
  },
  {
    picture: 'https://via.placeholder.com/150',
    name: 'asadf',
    type: 'Hardwares',
    brand: 'Epson',
    quantity: 100,
    availableQuantity: 0
  },
  {
    picture: 'https://via.placeholder.com/150',
    name: 'New Component',
    type: 'Electronics',
    brand: 'Samsung',
    quantity: 50,
    availableQuantity: 45
  },
  {
    picture: 'https://via.placeholder.com/150',
    name: 'Another Component',
    type: 'Mechanics',
    brand: 'Bosch',
    quantity: 200,
    availableQuantity: 180
  }
  // Add more data as needed
];




// Data.js
export const maintenanceData = [
  {
    id: 1,
    assetTag: 'ASTZ20213126',
    asset: 'Hp Printer',
    supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
    type: 'Repair',
    startDate: '2024-07-10',
    endDate: '2024-07-31'
  },
  {
    id: 2,
    assetTag: 'ASTZ20515152',
    asset: 'SPOLO16',
    supplier: 'hecan',
    type: 'Hardware support',
    startDate: '2024-06-27',
    endDate: '2024-10-30'
  },
  {
    id: 3,
    assetTag: 'ASTZ30125217',
    asset: 'TEST PC',
    supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
    type: 'Upgrade',
    startDate: '2024-06-27',
    endDate: '2024-06-30'
  },
  {
    id: 4,
    assetTag: 'ASTZ20213126',
    asset: 'Hp Printer',
    supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
    type: 'Repair',
    startDate: '2024-06-24',
    endDate: '2024-06-28'
  },
  {
    id: 5,
    assetTag: 'ASTZ20209126',
    asset: 'Bag',
    supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
    type: 'Maintenance',
    startDate: '2024-06-23',
    endDate: '2024-06-23'
  },
  {
    id: 6,
    assetTag: 'ASTZ3010238',
    asset: 'Printer HP Laster Jeet shum i fort kollor',
    supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
    type: 'Testing',
    startDate: '2024-06-27',
    endDate: '2024-06-27'
  }
];


// export const maintenanceData = [
//   {
//     assetTag: 'ASTZ20213126',
//     asset: 'Hp Printer',
//     supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
//     type: 'Repair',
//     startDate: '2024-07-10',
//     endDate: '2024-07-31'
//   },
//   {
//     assetTag: 'ASTZ20515152',
//     asset: 'SPOLO16',
//     supplier: 'hecan',
//     type: 'Hardware support',
//     startDate: '2024-06-27',
//     endDate: '2024-10-30'
//   },
//   {
//     assetTag: 'ASTZ30125217',
//     asset: 'TEST PC',
//     supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
//     type: 'Upgrade',
//     startDate: '2024-06-27',
//     endDate: '2024-06-30'
//   },
//   {
//     assetTag: 'ASTZ20213126',
//     asset: 'Hp Printer',
//     supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
//     type: 'Repair',
//     startDate: '2024-06-24',
//     endDate: '2024-06-28'
//   },
//   {
//     assetTag: 'ASTZ20209126',
//     asset: 'Bag',
//     supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
//     type: 'Maintenance',
//     startDate: '2024-06-23',
//     endDate: '2024-06-23'
//   },
//   {
//     assetTag: 'ASTZ3010238',
//     asset: 'Printer HP Laster Jeet shum i fort kollor',
//     supplier: 'SRI MALLIKARJUNA EQUIPMENTS',
//     type: 'Testing',
//     startDate: '2024-06-27',
//     endDate: '2024-06-27'
//   }
// ];

export const depreciationData = [
  { name: 'Bag', cost: 500, period: 12, category: 'Asset', assetValue: 500 },
  { name: 'Camera IP', cost: 2600, period: 1, category: 'Asset', assetValue: 500 },
  { name: 'Product 1', cost: 125, period: 12, category: 'Component', assetValue: 10 },
  { name: 'test', cost: 200000, period: 5, category: 'Asset', assetValue: 100000 },
  { name: '-', cost: '-', period: 4, category: '-', assetValue: 300000 },
  { name: 'Bed', cost: 15000, period: 3, category: 'Asset', assetValue: 400 },
  { name: 'HP Pavilion Laptop', cost: 50000, period: 12, category: 'Asset', assetValue: 2500 },
  { name: 'PC 50', cost: 500, period: 14, category: 'Asset', assetValue: 30000 },
  { name: 'demo component', cost: 1, period: 1, category: 'Component', assetValue: 1 },
  { name: '-', cost: '-', period: 24, category: '-', assetValue: 50 },
  { name: 'Bag', cost: 500, period: 12, category: 'Asset', assetValue: 500 },
  { name: 'Camera IP', cost: 2600, period: 1, category: 'Asset', assetValue: 500 },
  { name: 'Product 1', cost: 125, period: 12, category: 'Component', assetValue: 10 },
  { name: 'test', cost: 200000, period: 5, category: 'Asset', assetValue: 100000 },
  { name: '-', cost: '-', period: 4, category: '-', assetValue: 300000 },
  { name: 'Bed', cost: 15000, period: 3, category: 'Asset', assetValue: 400 },
  { name: 'HP Pavilion Laptop', cost: 50000, period: 12, category: 'Asset', assetValue: 2500 },
  { name: 'PC 50', cost: 500, period: 14, category: 'Asset', assetValue: 30000 },
  { name: 'demo component', cost: 1, period: 1, category: 'Component', assetValue: 1 },
  { name: '-', cost: '-', period: 24, category: '-', assetValue: 50 },
  { name: 'Bag', cost: 500, period: 12, category: 'Asset', assetValue: 500 },
  { name: 'Camera IP', cost: 2600, period: 1, category: 'Asset', assetValue: 500 },
  { name: 'Product 1', cost: 125, period: 12, category: 'Component', assetValue: 10 },
  { name: 'test', cost: 200000, period: 5, category: 'Asset', assetValue: 100000 },
  { name: '-', cost: '-', period: 4, category: '-', assetValue: 300000 },
  { name: 'Bed', cost: 15000, period: 3, category: 'Asset', assetValue: 400 },
  { name: 'HP Pavilion Laptop', cost: 50000, period: 12, category: 'Asset', assetValue: 2500 },
  { name: 'PC 50', cost: 500, period: 14, category: 'Asset', assetValue: 30000 },
  { name: 'demo component', cost: 1, period: 1, category: 'Component', assetValue: 1 },
  { name: '-', cost: '-', period: 24, category: '-', assetValue: 50 },
  { name: 'Bag', cost: 500, period: 12, category: 'Asset', assetValue: 500 },
  { name: 'Camera IP', cost: 2600, period: 1, category: 'Asset', assetValue: 500 },
  { name: 'Product 1', cost: 125, period: 12, category: 'Component', assetValue: 10 },
  { name: 'test', cost: 200000, period: 5, category: 'Asset', assetValue: 100000 },
  { name: '-', cost: '-', period: 4, category: '-', assetValue: 300000 },
  { name: 'Bed', cost: 15000, period: 3, category: 'Asset', assetValue: 400 },
  { name: 'HP Pavilion Laptop', cost: 50000, period: 12, category: 'Asset', assetValue: 2500 },
  { name: 'PC 50', cost: 500, period: 14, category: 'Asset', assetValue: 30000 },
  { name: 'demo component', cost: 1, period: 1, category: 'Component', assetValue: 1 },
  { name: '-', cost: '-', period: 24, category: '-', assetValue: 50 }
  
];

export const assetTypesData = [
  {
    name: 'Hardwares',
    description: 'Door Locks' 
  },
  {
    name: 'Extrusion',
    description: 'Bi-fold door	' 
  },
  {
    name: 'Extrusion',
    description: 'Curtain Wall	' 
  },
  {
    name: 'Notebook',
    description: 'User Notebook	' 
  },
  {
    name: 'AUTOMATIC TRANSFER SWITCH	',
    description: 'AUTOMATIC TRANSFER SWITCH	' 
  },
  {
    name: 'SWITCHGEAR',
    description: 'SWITCHGEAR' 
  },
  {
    name: 'TRANSFORMER',
    description: 'TRANSFORMER' 
  },
  {
    name: 'STRING BATTERY	',
    description: 'STRING BATTERY' 
  },
  {
    name: 'chair',
    description: 'Normal' 
  },
  {
    name: 'CPU',
    description: 'Central Processing Unit	' 
  },
  {
    name: 'Testing',
    description: 'Asset Type Testing	' 
  },
  {
    name: 'Asset Type Testing	',
    description: '' 
  },
];

export const brandData = [
  {
    name: 'Epson',
    description: 'DvD' 
  },
  {
    name: 'JOHN BEAN	',
    description: '' 
  },
  {
    name: 'ASUS',
    description: '' 
  },
  {
    name: 'Apple',
    description: 'all Apple' 
  },
  {
    name: 'DELL',
    description: 'Laptop' 
  },
  {
    name: 'Frontech',
    description: 'fronttech-headphone' 
  },
  {
    name: 'LG',
    description: 'LG-AC' 
  },
  {
    name: 'Surya',
    description: 'Light' 
  },
  {
    name: 'Frontech',
    description: 'E-cam' 
  },
  {
    name: 'Nilkamal',
    description: 'Chair' 
  },
  {
    name: 'Jio',
    description: 'Jio-WiFi' 
  },
  {
    name: 'Epson',
    description: 'Printer' 
  },
];

export const supplierData = [
{
  name: 'High Tech	',
  email:'rathnafanhouse@gmail.com	' ,
  phone:28155535 ,
  address: 'jaydev Vihar',
  city: 'BBSR',
  country:'IND'
},
{
  name: 'rajat',
  email: 'rajata@gmail.com',
  phone: 876566787,
  address: 'Nayapali',
  city: 'bbsr',
  country:'IND'
},
{
  name: 'Sahil',
  email: 'sahil@gmail.com',
  phone:98989898 ,
  address: 'link Road',
  city: 'CTC' ,
  country:'Ind'
},
{
  name: 'Punya',
  email: 'punya@gmail.com' ,
  phone:6565656565 ,
  address: 'R.K valley',
  city:'Jajpur' ,
  country:'IND'
},
{
  name: 'Sadab Hussain',
  email: 'sadab@gmail.com' ,
  phone: 11144446,
  address: 'Missilkenagar',
  city: 'Karachi',
  country:'PAK'
},
{
  name: 'Osama',
  email: 'osama@gmail.com',
  phone: 'UNknown Num',
  address: 'Bonbnagar',
  city: 'Lahore' ,
  country:'PAK'
},
{
  name: 'Donald',
  email: 'donald@gmail.com', 
  phone: 'UNknown Num',
  address: 'VK park',
  city: 'park street',
  country:'US'
},
{
  name: 'hecan',
  email: 'hc@gmail.com	',
  phone: 123456789,
  address: 'axcvb nmj	',
  city: 13,
  country:'Korea, Republic of	'
},
{
  name: 'End IN	',
  email: 'admin@example.com	',
  phone: 9876543210	,
  address: 'abc	',
  city: 'abcd',
  country:'Soltan Mozafar	'
},
{
  name: 'SRI MALLIKARJUNA EQUIPMENTS	',
  email: 'smpe1407@gmail.com	',
  phone: 7989798097,
  address: 'Sri Mallikarjuna Pneumatics & Equipments 2-3-89, Kusuma Nivas, Ramgopalpet Ranigunj, Secunderabad -500003	',
  city: 'HYDERABAD',
  country:'IND'
}
];

export const locationData = [
{
  name: 'Gasha high school - Erbil	',
  description: 'GHSE' 
},
{
  name: 'Skudai	',
  description: 'UTM Office	' 
},
{
  name: 'Testing Locations	',
  description: '' 
},
{
  name: 'Private Room 101	',
  description: 'Private Room 101	' 
},
{
  name: 'ITCH',
  description: 'Company at Chhauni' 
},
{
  name: 'Delhi',
  description: 'Delhi Supplier	' 
},
{
  name: 'ACI TORINO	',
  description: 'test' 
},
{
  name: 'Surya',
  description: 'gaya' 
},
{
  name: 'Frontech',
  description: 'office' 
},
{
  name: 'Nilkamal',
  description: 'room2' 
},
{
  name: 'Jio',
  description: 'room3' 
},
{
  name: 'Epson',
  description: 'room4' 
},
];

  
  export default data;
  