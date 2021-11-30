const HardCodedKeys = [
    'ABICode',
    'Description',
    'RegistrationYear',
    'VehicleInsuranceGroup',
    'Colour',
    'ImageUrl',
  ];
const ObjectKeys = [
  "CarMake",
  "CarModel",
  "MakeDescription",
  "ModelDescription",
  "EngineSize",
  "BodyStyle",
  "FuelType",
];
const HardCodeText = {
    ABICode: "ABI Code",
    Description: "Car Description",
    RegistrationYear: "Registration Year",
    Colour: "Color",
    ImageUrl: "Image Url",
    CarMake: "Car Make", 
    CarModel: "Model Of Car",
    BodyStyle: "Style Of Body",
    EngineSize: "Size of Engine",
    NumberOfDoors: "No. Of Doors",
    MakeDescription: "Make Description",
    FuelType: "Fuel Type",
    Transmission: "Transmission",
    ModelDescription: "Model Description",
    VehicleInsuranceGroup: "Insurance Vehicle",
    DriverSide: "Side of Driver",
    IndicativeValue: "Indicative Value",
    NumberOfSeats: "No. Of Seats",
    Immobiliser: "Immbobliser",
    nvic: "National Vehicle Identification Code",
    year: 'Year',
    make: 'Make',
    model: "Model",
    bodyType: 'Body Type',
    cylinders: "Engine Cylinders",
    description: "Engine Description",
    transmissionType: "Transmission Type",
    driveType: "Drive Type",
    variant: "Variant",
    series: "Series",
    VechileIdentificationNumber: "Vechile Identification Number",
    Engine: "Engine",
    family: 'Family',
    code: "Code",
    State: 'State',
    Expiry: 'Expiry',
    VehicleIdentificationNumber: "Vehicle Identification Number",
    KType: "KType", 
    EngineNumber: 'Engine Number',
    Variant: 'Variant'
    
};
const Ignore = [
  "capacity", "CarMake"
]
module.exports = {HardCodedKeys, HardCodeText, Ignore, ObjectKeys};