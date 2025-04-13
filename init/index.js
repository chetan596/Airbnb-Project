const mongoose = require("mongoose");
const data = require("./data")
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
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default : "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    }
});

let Lsting = mongoose.model("listing", listingSchema);

Lsting.insertMany([
  {
    title: "Grand Azure Palace",
    description: "Luxurious beachfront hotel with private villas and spa",
    price: 1450,
    location: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?q=80&w=1633&auto=format&fit=crop"
  },
  {
    title: "The Imperial Heights",
    description: "A lavish retreat with panoramic mountain views and fine dining",
    price: 1800,
    location: "Lucerne",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Royal Orchid Haven",
    description: "Elegant suites nestled in tropical gardens with a private lagoon",
    price: 1600,
    location: "Ubud, Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1689729855420-d8dde176bf91?q=80&w=1633&auto=format&fit=crop"
  },
  {
    title: "Chateau Lumière",
    description: "18th-century French castle turned luxury hotel with vineyard access",
    price: 2200,
    location: "Bordeaux",
    country: "France",
    image: "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "The Golden Mirage",
    description: "Opulent desert resort with infinity pools and private butlers",
    price: 2100,
    location: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1689729830276-6b8a3fe230f9?q=80&w=1633&auto=format&fit=crop"
  },
  {
    title: "Sapphire Sea Resort",
    description: "All-inclusive oceanfront resort with water villas and gourmet cuisine",
    price: 1750,
    location: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Emerald Crest Resort",
    description: "A serene mountain lodge with private hot springs and hiking trails",
    price: 1300,
    location: "Banff",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1733860108323-25f392878e76?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Celestial Garden Hotel",
    description: "Zen-inspired boutique hotel with lush gardens and organic restaurant",
    price: 1150,
    location: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1374&auto=format&fit=crop"
  },
  {
    title: "Casa Del Sol",
    description: "Spanish-style luxury resort with vineyard tours and horseback riding",
    price: 1250,
    location: "Marbella",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1602002418679-43121356bf41?q=80&w=1374&auto=format&fit=crop"
  },
  {
    title: "Nordic Serenity Suites",
    description: "Snow-covered modern suites with aurora views and thermal spas",
    price: 1900,
    location: "Tromsø",
    country: "Norway",
    image: "https://images.unsplash.com/photo-1602002418211-9d76470fa71f?q=80&w=1374&auto=format&fit=crop"
  },
  {
    title: "The Manhattan Crown",
    description: "Sleek high-rise with skyline views and rooftop pool",
    price: 2050,
    location: "New York City",
    country: "USA",
    image: "https://images.unsplash.com/photo-1582533401888-825fb21aedf1?q=80&w=1512&auto=format&fit=crop"
  },
  {
    title: "Ocean Pearl Villas",
    description: "Private villas with direct beach access and sunset dining",
    price: 1500,
    location: "Phuket",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1582533401893-cf3acb4680e8?q=80&w=1542&auto=format&fit=crop"
  },
  {
    title: "The Regal Canopy",
    description: "Colonial-style resort with golf course and luxury spa",
    price: 1400,
    location: "Nairobi",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1733860108323-25f392878e76?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Vienna Grand Elegance",
    description: "Classic European charm with opera nights and vintage interiors",
    price: 1700,
    location: "Vienna",
    country: "Austria",
    image: "https://images.unsplash.com/photo-1733860080692-581d8b50ddbe?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "The Highland Embrace",
    description: "Cozy, high-end lodge with fireplace suites and whisky tastings",
    price: 1100,
    location: "Inverness",
    country: "Scotland",
    image: "https://images.unsplash.com/photo-1703623368573-89a44816847c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Le Mirage d'Or",
    description: "Moroccan-inspired oasis with courtyards, pools, and hammams",
    price: 1350,
    location: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1652454163547-3dd4cf671303?q=80&w=1471&auto=format&fit=crop"
  },
  {
    title: "Monteverde Cloud Retreat",
    description: "Eco-luxury lodge in the cloud forest with nature trails and canopy tours",
    price: 1450,
    location: "Monteverde",
    country: "Costa Rica",
    image: "https://images.unsplash.com/photo-1541225202586-752465145201?q=80&w=1528&auto=format&fit=crop"
  },
  {
    title: "Amara Rainforest Estate",
    description: "Jungle estate with infinity pool, gourmet cuisine, and wildlife safaris",
    price: 1700,
    location: "Manaus",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1580432415601-c63c0ddcf6da?q=80&w=1469&auto=format&fit=crop"
  },
  {
    title: "Villa Adriatica",
    description: "Elegant coastal villa with Roman-style decor and fine Mediterranean dining",
    price: 1550,
    location: "Dubrovnik",
    country: "Croatia",
    image: "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Crystal Lagoon Escape",
    description: "Water villas on turquoise lagoons with overwater hammocks",
    price: 1950,
    location: "Bora Bora",
    country: "French Polynesia",
    image: "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "The Royal Andes Retreat",
    description: "Andean lodge with private terraces and views of Machu Picchu",
    price: 1650,
    location: "Cusco",
    country: "Peru",
    image: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "La Casa de Lirio",
    description: "Luxury boutique hotel with rooftop garden and art gallery",
    price: 1200,
    location: "Buenos Aires",
    country: "Argentina",
    image: "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?q=80&w=1633&auto=format&fit=crop"
  },
  {
    title: "Jade Horizon",
    description: "Modern oceanfront retreat with minimalist interiors and yoga pavilions",
    price: 1500,
    location: "Gold Coast",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1689729830269-0ea04c62ecce?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "The Arctic Aurora Lodge",
    description: "Glass igloos with panoramic views of northern lights",
    price: 2000,
    location: "Rovaniemi",
    country: "Finland",
    image: "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Serengeti Sky Lodge",
    description: "Safari lodge with luxury tents, game drives, and sky dining",
    price: 1800,
    location: "Serengeti",
    country: "Tanzania",
    image: "https://images.unsplash.com/photo-1582533401888-825fb21aedf1?q=80&w=1512&auto=format&fit=crop"
  }
])