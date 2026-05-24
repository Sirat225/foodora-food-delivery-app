const mongoose = require('mongoose');
const User = require('./models/User');
const Restaurant = require('./models/Restaurant');
const MenuItem = require('./models/MenuItem');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.error('MongoDB connection error:', err));

async function seedData() {
  try {
    console.log('Starting data seeding...');

    // Create a restaurant owner user
    let owner = await User.findOne({ email: 'owner@foodora.com' });
    if (!owner) {
      owner = new User({
        name: 'Restaurant Owner',
        email: 'owner@foodora.com',
        password: '123456',
        phone: '+923001234567',
        role: 'restaurant_owner'
      });
      await owner.save();
      console.log('Restaurant owner created');
    }

    // Clear existing data
    await Restaurant.deleteMany({});
    await MenuItem.deleteMany({});
    console.log('Cleared existing restaurants and menu items');

    // Sample restaurants data
    const restaurantsData = [
      {
        name: "Pizza Fusion",
        description: "Authentic Italian pizzas with Pakistani flavors",
        owner: owner._id,
        cuisine: ["Pizza", "Italian"],
        address: {
          street: "F-7 Markaz",
          city: "Islamabad",
          state: "ICT",
          zipCode: "44000",
          coordinates: {
            lat: 33.7294,
            lng: 73.0931
          }
        },
        contact: {
          phone: "+923001111111",
          email: "info@pizzafusion.com"
        },
        logo: "images/Pizza Fusion.jpg",
        rating: {
          average: 4.5,
          count: 150
        },
        deliveryInfo: {
          deliveryTime: { min: 25, max: 35 },
          deliveryFee: 0,
          minimumOrder: 500,
          deliveryRadius: 15
        },
        operatingHours: {
          monday: { open: "11:00", close: "23:00", isOpen: true },
          tuesday: { open: "11:00", close: "23:00", isOpen: true },
          wednesday: { open: "11:00", close: "23:00", isOpen: true },
          thursday: { open: "11:00", close: "23:00", isOpen: true },
          friday: { open: "11:00", close: "23:00", isOpen: true },
          saturday: { open: "11:00", close: "23:00", isOpen: true },
          sunday: { open: "11:00", close: "23:00", isOpen: true }
        },
        isActive: true,
        isVerified: true,
        tags: ["Pizza", "Fast Food", "Italian"]
      },
      {
        name: "The Burger Spot",
        description: "Juicy burgers and crispy fries",
        owner: owner._id,
        cuisine: ["Burgers", "Fast Food"],
        address: {
          street: "Blue Area",
          city: "Islamabad",
          state: "ICT",
          zipCode: "44000",
          coordinates: {
            lat: 33.7077,
            lng: 73.0563
          }
        },
        contact: {
          phone: "+923002222222",
          email: "info@burgerspot.com"
        },
        logo: "images/The Burger Spot.jpg",
        rating: {
          average: 4.8,
          count: 200
        },
        deliveryInfo: {
          deliveryTime: { min: 15, max: 20 },
          deliveryFee: 150,
          minimumOrder: 300,
          deliveryRadius: 10
        },
        operatingHours: {
          monday: { open: "12:00", close: "24:00", isOpen: true },
          tuesday: { open: "12:00", close: "24:00", isOpen: true },
          wednesday: { open: "12:00", close: "24:00", isOpen: true },
          thursday: { open: "12:00", close: "24:00", isOpen: true },
          friday: { open: "12:00", close: "24:00", isOpen: true },
          saturday: { open: "12:00", close: "24:00", isOpen: true },
          sunday: { open: "12:00", close: "24:00", isOpen: true }
        },
        isActive: true,
        isVerified: true,
        tags: ["Burgers", "Fast Food"]
      },
      {
        name: "Desi Handi",
        description: "Traditional Pakistani cuisine",
        owner: owner._id,
        cuisine: ["Pakistani", "Desi"],
        address: {
          street: "G-9 Markaz",
          city: "Islamabad",
          state: "ICT",
          zipCode: "44000",
          coordinates: {
            lat: 33.6973,
            lng: 73.0515
          }
        },
        contact: {
          phone: "+923003333333",
          email: "info@desihandi.com"
        },
        logo: "images/Desi handi.jpg",
        rating: {
          average: 4.3,
          count: 120
        },
        deliveryInfo: {
          deliveryTime: { min: 30, max: 40 },
          deliveryFee: 50,
          minimumOrder: 600,
          deliveryRadius: 12
        },
        operatingHours: {
          monday: { open: "11:00", close: "23:00", isOpen: true },
          tuesday: { open: "11:00", close: "23:00", isOpen: true },
          wednesday: { open: "11:00", close: "23:00", isOpen: true },
          thursday: { open: "11:00", close: "23:00", isOpen: true },
          friday: { open: "11:00", close: "23:00", isOpen: true },
          saturday: { open: "11:00", close: "23:00", isOpen: true },
          sunday: { open: "11:00", close: "23:00", isOpen: true }
        },
        isActive: true,
        isVerified: true,
        tags: ["Pakistani", "Traditional", "Spicy"]
      },
      {
        name: "Fast Bites Cafe",
        description: "Quick bites and refreshing drinks",
        owner: owner._id,
        cuisine: ["Fast Food", "Cafe"],
        address: {
          street: "F-10 Markaz",
          city: "Islamabad",
          state: "ICT",
          zipCode: "44000",
          coordinates: {
            lat: 33.6938,
            lng: 73.0651
          }
        },
        contact: {
          phone: "+923004444444",
          email: "info@fastbites.com"
        },
        logo: "images/Fast Bites Cafe.jpg",
        rating: {
          average: 4.2,
          count: 80
        },
        deliveryInfo: {
          deliveryTime: { min: 10, max: 15 },
          deliveryFee: 50,
          minimumOrder: 200,
          deliveryRadius: 8
        },
        operatingHours: {
          monday: { open: "08:00", close: "22:00", isOpen: true },
          tuesday: { open: "08:00", close: "22:00", isOpen: true },
          wednesday: { open: "08:00", close: "22:00", isOpen: true },
          thursday: { open: "08:00", close: "22:00", isOpen: true },
          friday: { open: "08:00", close: "22:00", isOpen: true },
          saturday: { open: "08:00", close: "22:00", isOpen: true },
          sunday: { open: "08:00", close: "22:00", isOpen: true }
        },
        isActive: true,
        isVerified: true,
        tags: ["Fast Food", "Cafe", "Quick"]
      }
    ];

    // Create restaurants
    const restaurants = [];
    for (const restaurantData of restaurantsData) {
      const restaurant = new Restaurant(restaurantData);
      await restaurant.save();
      restaurants.push(restaurant);
      console.log(`Created restaurant: ${restaurant.name}`);
    }

    // Sample menu items for each restaurant
    const menuItemsData = [
      // Pizza Fusion Menu
      {
        restaurant: restaurants[0]._id,
        name: "Chicken Tikka Pizza",
        description: "Classic tikka with fresh vegetables and mozzarella.",
        category: "main_course",
        price: 1200,
        images: [{ url: "images/Chicken Tikka Pizza.jpg", alt: "Chicken Tikka Pizza" }],
        ingredients: ["Chicken Tikka", "Mozzarella", "Tomato Sauce", "Bell Peppers"],
        dietaryTags: ["halal"],
        availability: {
          isAvailable: true,
          availableFrom: "11:00",
          availableTo: "23:00",
          daysAvailable: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        },
        preparationTime: 20,
        isPopular: true
      },
      {
        restaurant: restaurants[0]._id,
        name: "Fajita Special Pizza",
        description: "Smoky chicken fajita with olives, onions, and bell peppers.",
        category: "main_course",
        price: 1350,
        images: [{ url: "images/Fajita Special Pizza.jpg", alt: "Fajita Special Pizza" }],
        ingredients: ["Chicken Fajita", "Olives", "Onions", "Bell Peppers", "Cheese"],
        dietaryTags: ["halal"],
        availability: {
          isAvailable: true,
          availableFrom: "11:00",
          availableTo: "23:00",
          daysAvailable: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        },
        preparationTime: 22,
        isPopular: true
      },
      {
        restaurant: restaurants[0]._id,
        name: "Loaded Fries",
        description: "Golden fries topped with cheese, jalapenos, and special sauces.",
        category: "sides",
        price: 350,
        images: [{ url: "images/Loaded Fries.jpg", alt: "Loaded Fries" }],
        ingredients: ["Fries", "Cheese", "Jalapenos", "Special Sauce"],
        dietaryTags: ["vegetarian"],
        availability: {
          isAvailable: true,
          availableFrom: "11:00",
          availableTo: "23:00",
          daysAvailable: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        },
        preparationTime: 10
      },

      // The Burger Spot Menu
      {
        restaurant: restaurants[1]._id,
        name: "Classic Cheeseburger",
        description: "Beef patty, cheddar cheese, pickles, and our signature sauce.",
        category: "main_course",
        price: 699,
        images: [{ url: "images/Classic Cheeseburger.jpg", alt: "Classic Cheeseburger" }],
        ingredients: ["Beef Patty", "Cheddar Cheese", "Pickles", "Signature Sauce"],
        dietaryTags: ["halal"],
        availability: {
          isAvailable: true,
          availableFrom: "12:00",
          availableTo: "24:00",
          daysAvailable: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        },
        preparationTime: 15,
        isPopular: true
      },
      {
        restaurant: restaurants[1]._id,
        name: "Fiery Chicken Zinger",
        description: "Crispy chicken fillet with spicy mayo, lettuce, and secret spices.",
        category: "main_course",
        price: 799,
        images: [{ url: "images/Fiery Chicken Zinger.jpg", alt: "Fiery Chicken Zinger" }],
        ingredients: ["Chicken Fillet", "Spicy Mayo", "Lettuce", "Secret Spices"],
        dietaryTags: ["halal", "spicy"],
        availability: {
          isAvailable: true,
          availableFrom: "12:00",
          availableTo: "24:00",
          daysAvailable: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        },
        preparationTime: 18,
        isPopular: true
      },

      // Desi Handi Menu
      {
        restaurant: restaurants[2]._id,
        name: "Chicken Karahi (Half)",
        description: "Traditional Pakistani chicken curry, slow-cooked in a wok.",
        category: "main_course",
        price: 950,
        images: [{ url: "images/Chicken Tikka Karahi(half).jpg", alt: "Chicken Karahi Half" }],
        ingredients: ["Chicken", "Tomatoes", "Ginger", "Garlic", "Traditional Spices"],
        dietaryTags: ["halal", "spicy"],
        availability: {
          isAvailable: true,
          availableFrom: "11:00",
          availableTo: "23:00",
          daysAvailable: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        },
        preparationTime: 25,
        isPopular: true
      },

      // Fast Bites Cafe Menu
      {
        restaurant: restaurants[3]._id,
        name: "Crispy Wraps",
        description: "Marinated chicken strips in a soft tortilla with crisp veggies.",
        category: "main_course",
        price: 450,
        images: [{ url: "images/Crispy Wraps.jpg", alt: "Crispy Wraps" }],
        ingredients: ["Chicken Strips", "Tortilla", "Fresh Vegetables", "Sauce"],
        dietaryTags: ["halal"],
        availability: {
          isAvailable: true,
          availableFrom: "08:00",
          availableTo: "22:00",
          daysAvailable: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        },
        preparationTime: 12,
        isPopular: true
      }
    ];

    // Create menu items
    for (const menuItemData of menuItemsData) {
      const menuItem = new MenuItem(menuItemData);
      await menuItem.save();
      console.log(`Created menu item: ${menuItem.name}`);
    }

    console.log('✅ Data seeding completed successfully!');
    console.log(`Created ${restaurants.length} restaurants and ${menuItemsData.length} menu items`);
    
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Run the seeding
seedData();