const mongoose = require("mongoose");
// const data = require("./data")
const Schema = mongoose.Schema;

main().then(() => {
    console.log("The databass was successfully connectd");
}).catch((err) => {
    console.log("----Error---", err);

})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb")
}

const listingSchema = new Schema({
  hotelType: { type: String, required: true },
  roomType: { type: String, required: true },
  location: {
      country: { type: String,  },
      flatHouse: { type: String,  },
      neaebyLandmark: { type: String },  // nearby galti se neaeby likha tha
      streetAddress: { type: String, },
      StateUnionTerritory: { type: String,  },
      DistrictLocality: { type: String,  },
      CityTown: { type: String,  },
      pinCode: { type: Number,  },
  },
  floorPlan: {
      Guests: { type: String, required: true },
      Bedrooms: { type: String, required: true },
      Bed: { type: String, required: true },
      Does: { type: String },  // yes/no optional lag raha mujhe
  },
  bathrooms: {
      PrivateAndAttached: { type: String, required: true },
      Dedicated: { type: String, required: true },
      Shared: { type: String },
  },
  occupancy: [{ type: String }], // array of strings
  amenitiess: {
      amenities: [{ type: String }],
      standoutAmenities: [{ type: String }]
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  describe: [{ type: String }],
  instantBook: { type: String }, // Approver/Non-Approver etc
  welcomeReservation: { type: String }, // yes/no
  price: { type: String, required: true },

  image: {
      type: String,
      default: "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
      set: (v) => v === "" ? "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg" : v,
  }
});

let Lsting = mongoose.model("listing", listingSchema);

Lsting.insertMany([
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 1",
    "description": "A beautiful hotel number 1 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3912",
    "image": "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 2",
    "description": "A beautiful hotel number 2 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3112",
    "image": "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Mystic 3",
    "description": "A beautiful hotel number 3 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "1565",
    "image": "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Paradise 4",
    "description": "A beautiful hotel number 4 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "9108",
    "image": "https://images.unsplash.com/photo-1602002418211-9d76470fa71f?q=80&w=1374&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Paradise 5",
    "description": "A beautiful hotel number 5 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5272",
    "image": "https://images.unsplash.com/photo-1652454163547-3dd4cf671303?q=80&w=1471&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Ocean 6",
    "description": "A beautiful hotel number 6 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "9062",
    "image": "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Elite 7",
    "description": "A beautiful hotel number 7 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "2748",
    "image": "https://images.unsplash.com/photo-1733860108323-25f392878e76?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Paradise 8",
    "description": "A beautiful hotel number 8 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "7461",
    "image": "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Elite 9",
    "description": "A beautiful hotel number 9 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5133",
    "image": "https://images.unsplash.com/photo-1582533401888-825fb21aedf1?q=80&w=1512&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 10",
    "description": "A beautiful hotel number 10 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5028",
    "image": "https://images.unsplash.com/photo-1652454163547-3dd4cf671303?q=80&w=1471&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Horizon 11",
    "description": "A beautiful hotel number 11 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5206",
    "image": "https://images.unsplash.com/photo-1602002418679-43121356bf41?q=80&w=1374&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Palm 12",
    "description": "A beautiful hotel number 12 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "1693",
    "image": "https://images.unsplash.com/photo-1733860108323-25f392878e76?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Ocean 13",
    "description": "A beautiful hotel number 13 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5363",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 14",
    "description": "A beautiful hotel number 14 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3344",
    "image": "https://images.unsplash.com/photo-1733860080692-581d8b50ddbe?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Vista 15",
    "description": "A beautiful hotel number 15 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "9743",
    "image": "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Palm 16",
    "description": "A beautiful hotel number 16 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "9575",
    "image": "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?w=500&auto=format&fit=crop&q=60"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Serene 17",
    "description": "A beautiful hotel number 17 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "4654",
    "image": "https://images.unsplash.com/photo-1582533401893-cf3acb4680e8?q=80&w=1542&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Serene 18",
    "description": "A beautiful hotel number 18 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "2930",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Serene 19",
    "description": "A beautiful hotel number 19 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "4496",
    "image": "https://images.unsplash.com/photo-1703623368573-89a44816847c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 20",
    "description": "A beautiful hotel number 20 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "1961",
    "image": "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1374&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Serene 21",
    "description": "A beautiful hotel number 21 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3433",
    "image": "https://images.unsplash.com/photo-1582533401893-cf3acb4680e8?q=80&w=1542&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Zenith 22",
    "description": "A beautiful hotel number 22 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "9563",
    "image": "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Palm 23",
    "description": "A beautiful hotel number 23 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3272",
    "image": "https://images.unsplash.com/photo-1703623368573-89a44816847c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Serene 24",
    "description": "A beautiful hotel number 24 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "2291",
    "image": "https://images.unsplash.com/photo-1689729830276-6b8a3fe230f9?q=80&w=1633&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Zenith 25",
    "description": "A beautiful hotel number 25 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "6154",
    "image": "https://images.unsplash.com/photo-1582533401888-825fb21aedf1?q=80&w=1512&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Elite 26",
    "description": "A beautiful hotel number 26 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "4542",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Horizon 27",
    "description": "A beautiful hotel number 27 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "4851",
    "image": "https://images.unsplash.com/photo-1733860080692-581d8b50ddbe?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 28",
    "description": "A beautiful hotel number 28 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "7646",
    "image": "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?q=80&w=1633&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Ocean 29",
    "description": "A beautiful hotel number 29 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3019",
    "image": "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1374&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Paradise 30",
    "description": "A beautiful hotel number 30 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "1567",
    "image": "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Serene 31",
    "description": "A beautiful hotel number 31 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "4117",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 32",
    "description": "A beautiful hotel number 32 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5509",
    "image": "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?q=80&w=1633&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Zenith 33",
    "description": "A beautiful hotel number 33 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "4967",
    "image": "https://images.unsplash.com/photo-1602002418211-9d76470fa71f?q=80&w=1374&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Ocean 34",
    "description": "A beautiful hotel number 34 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5215",
    "image": "https://images.unsplash.com/photo-1582533401893-cf3acb4680e8?q=80&w=1542&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 35",
    "description": "A beautiful hotel number 35 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5889",
    "image": "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1374&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Paradise 36",
    "description": "A beautiful hotel number 36 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5150",
    "image": "https://images.unsplash.com/photo-1580432415601-c63c0ddcf6da?q=80&w=1469&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Zenith 37",
    "description": "A beautiful hotel number 37 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "8326",
    "image": "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?q=80&w=1633&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Mystic 38",
    "description": "A beautiful hotel number 38 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5484",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Ocean 39",
    "description": "A beautiful hotel number 39 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "9211",
    "image": "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?w=500&auto=format&fit=crop&q=60"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Mystic 40",
    "description": "A beautiful hotel number 40 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "2761",
    "image": "https://images.unsplash.com/photo-1582533401888-825fb21aedf1?q=80&w=1512&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Vista 41",
    "description": "A beautiful hotel number 41 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "8045",
    "image": "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 42",
    "description": "A beautiful hotel number 42 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3637",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Royal 43",
    "description": "A beautiful hotel number 43 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3064",
    "image": "https://images.unsplash.com/photo-1602002418211-9d76470fa71f?q=80&w=1374&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Horizon 44",
    "description": "A beautiful hotel number 44 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "7493",
    "image": "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Horizon 45",
    "description": "A beautiful hotel number 45 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "1038",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Serene 46",
    "description": "A beautiful hotel number 46 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "6581",
    "image": "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?w=500&auto=format&fit=crop&q=60"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Elite 47",
    "description": "A beautiful hotel number 47 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "5606",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Ocean 48",
    "description": "A beautiful hotel number 48 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "8903",
    "image": "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Horizon 49",
    "description": "A beautiful hotel number 49 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "3370",
    "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    "hotelType": "House",
    "roomType": "a room",
    "location": {
      "country": "India",
      "flatHouse": "Flat 50",
      "neaebyLandmark": "Landmark",
      "streetAddress": "Street 50",
      "StateUnionTerritory": "State",
      "DistrictLocality": "District",
      "CityTown": "City 50",
      "pinCode": "123456"
    },
    "floorPlan": {
      "Guests": "2",
      "Bedrooms": "2",
      "Bed": "2",
      "Does": "yes"
    },
    "bathrooms": {
      "PrivateAndAttached": "2",
      "Dedicated": "2",
      "Shared": "1"
    },
    "occupancy": [
      "Me",
      "My family",
      "Other guests",
      "Flatmates"
    ],
    "amenitiess": {
      "amenities": [
        "Pool",
        "Hot tub",
        "Patio",
        "BBQ grill"
      ],
      "standoutAmenities": [
        "TV",
        "Wi-fi",
        "Kitchen"
      ]
    },
    "title": "Hotel Elite 50",
    "description": "A beautiful hotel number 50 with amazing amenities.",
    "describe": [
      "Charming",
      "Stylish",
      "Central"
    ],
    "instantBook": "Approved",
    "welcomeReservation": "yes",
    "price": "1605",
    "image": "https://images.unsplash.com/photo-1582533401893-cf3acb4680e8?q=80&w=1542&auto=format&fit=crop"
  }
])