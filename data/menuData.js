// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

// List of available cuisines
const cuisines = ["Italian", "Chinese", "Vegan", "Mexican", "Indian"];

// Menu items for each cuisine
const menuItems = {
  Italian: [
    {
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish",
      price: 12.99,
      isSpecial: false,
    },
    {
      name: "Margherita Pizza",
      description: "Tomato, mozzarella, and basil",
      price: 10.99,
      isSpecial: true,
    },
    {
      name: "Lasagna",
      description: "Layers of pasta, meat, and cheese",
      price: 14.99,
      isSpecial: false,
    },
    {
      name: "Fettuccine Alfredo",
      description: "Pasta with creamy Alfredo sauce",
      price: 13.99,
      isSpecial: false,
    },
    {
      name: "Bruschetta",
      description: "Grilled bread with tomato and basil",
      price: 7.99,
      isSpecial: true,
    },
    {
      name: "Tiramisu",
      description: "Coffee-flavored Italian dessert",
      price: 6.99,
      isSpecial: false,
    },
    {
      name: "Caprese Salad",
      description: "Salad with tomatoes, mozzarella, and basil",
      price: 8.99,
      isSpecial: true,
    },
    {
      name: "Risotto",
      description: "Creamy Italian rice dish",
      price: 15.99,
      isSpecial: false,
    },
    {
      name: "Panna Cotta",
      description: "Italian dessert made with cream",
      price: 5.99,
      isSpecial: true,
    },
    {
      name: "Minestrone Soup",
      description: "Hearty vegetable soup",
      price: 9.99,
      isSpecial: false,
    },
  ],
  Chinese: [
    {
      name: "Kung Pao Chicken",
      description: "Spicy stir-fry chicken with peanuts",
      price: 11.99,
      isSpecial: true,
    },
    {
      name: "Sweet and Sour Pork",
      description: "Pork with a tangy sweet and sour sauce",
      price: 10.99,
      isSpecial: false,
    },
    {
      name: "Spring Rolls",
      description: "Crispy rolls with vegetables",
      price: 6.99,
      isSpecial: false,
    },
    {
      name: "Fried Rice",
      description: "Rice stir-fried with vegetables and eggs",
      price: 8.99,
      isSpecial: true,
    },
    {
      name: "General Tso's Chicken",
      description: "Sweet and spicy deep-fried chicken",
      price: 12.99,
      isSpecial: false,
    },
    {
      name: "Dumplings",
      description: "Steamed or fried dumplings with filling",
      price: 7.99,
      isSpecial: true,
    },
    {
      name: "Hot and Sour Soup",
      description: "Spicy and tangy soup",
      price: 5.99,
      isSpecial: false,
    },
    {
      name: "Moo Shu Pork",
      description: "Stir-fried pork with vegetables",
      price: 13.99,
      isSpecial: true,
    },
    {
      name: "Egg Rolls",
      description: "Deep-fried rolls with meat and vegetables",
      price: 6.99,
      isSpecial: false,
    },
    {
      name: "Mapo Tofu",
      description: "Spicy tofu with minced meat",
      price: 10.99,
      isSpecial: true,
    },
  ],
  Vegan: [
    {
      name: "Vegan Burger",
      description: "Plant-based burger with lettuce and tomato",
      price: 9.99,
      isSpecial: true,
    },
    {
      name: "Quinoa Salad",
      description: "Salad with quinoa, vegetables, and vinaigrette",
      price: 8.99,
      isSpecial: false,
    },
    {
      name: "Vegan Tacos",
      description: "Tacos with plant-based filling",
      price: 10.99,
      isSpecial: false,
    },
    {
      name: "Vegan Pizza",
      description: "Pizza with vegan cheese and vegetables",
      price: 11.99,
      isSpecial: true,
    },
    {
      name: "Stuffed Peppers",
      description: "Bell peppers stuffed with rice and vegetables",
      price: 9.99,
      isSpecial: false,
    },
    {
      name: "Vegan Mac and Cheese",
      description: "Macaroni with vegan cheese sauce",
      price: 8.99,
      isSpecial: true,
    },
    {
      name: "Vegan Sushi",
      description: "Sushi rolls with vegetables",
      price: 12.99,
      isSpecial: false,
    },
    {
      name: "Vegan Brownies",
      description: "Chocolate brownies made with vegan ingredients",
      price: 5.99,
      isSpecial: true,
    },
    {
      name: "Vegan Ice Cream",
      description: "Ice cream made with plant-based ingredients",
      price: 4.99,
      isSpecial: false,
    },
    {
      name: "Vegan Chili",
      description: "Spicy chili with beans and vegetables",
      price: 9.99,
      isSpecial: true,
    },
  ],
  Mexican: [
    {
      name: "Tacos al Pastor",
      description: "Tacos with marinated pork",
      price: 9.99,
      isSpecial: true,
    },
    {
      name: "Guacamole",
      description: "Fresh avocado dip",
      price: 5.99,
      isSpecial: false,
    },
    {
      name: "Churros",
      description: "Fried dough pastry with cinnamon sugar",
      price: 4.99,
      isSpecial: false,
    },
    {
      name: "Enchiladas",
      description: "Tortillas filled with meat and covered in sauce",
      price: 11.99,
      isSpecial: true,
    },
    {
      name: "Quesadillas",
      description: "Tortillas filled with cheese and grilled",
      price: 8.99,
      isSpecial: false,
    },
    {
      name: "Tamales",
      description: "Corn dough filled with meat and steamed",
      price: 7.99,
      isSpecial: true,
    },
    {
      name: "Salsa and Chips",
      description: "Fresh salsa with tortilla chips",
      price: 4.99,
      isSpecial: false,
    },
    {
      name: "Burritos",
      description: "Large tortillas filled with meat, beans, and rice",
      price: 10.99,
      isSpecial: true,
    },
    {
      name: "Flan",
      description: "Caramel custard dessert",
      price: 5.99,
      isSpecial: false,
    },
    {
      name: "Pozole",
      description: "Traditional Mexican soup with hominy",
      price: 12.99,
      isSpecial: true,
    },
  ],
  Indian: [
    {
      name: "Butter Chicken",
      description: "Chicken in a creamy tomato sauce",
      price: 12.99,
      isSpecial: true,
    },
    {
      name: "Palak Paneer",
      description: "Spinach and cottage cheese curry",
      price: 10.99,
      isSpecial: false,
    },
    {
      name: "Naan",
      description: "Leavened flatbread",
      price: 2.99,
      isSpecial: false,
    },
    {
      name: "Chicken Tikka Masala",
      description: "Chicken in a spiced tomato sauce",
      price: 13.99,
      isSpecial: true,
    },
    {
      name: "Samosas",
      description: "Fried pastry with savory filling",
      price: 5.99,
      isSpecial: false,
    },
    {
      name: "Biryani",
      description: "Spiced rice with meat or vegetables",
      price: 11.99,
      isSpecial: true,
    },
    {
      name: "Gulab Jamun",
      description: "Sweet milk-based dessert",
      price: 4.99,
      isSpecial: false,
    },
    {
      name: "Aloo Gobi",
      description: "Potato and cauliflower curry",
      price: 9.99,
      isSpecial: true,
    },
    {
      name: "Raita",
      description: "Yogurt-based side dish",
      price: 3.99,
      isSpecial: false,
    },
    {
      name: "Chana Masala",
      description: "Spicy chickpea curry",
      price: 8.99,
      isSpecial: true,
    },
  ],
};

// Function to generate a random menu for a given cuisine
function generateRandomMenu() {
  const cuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  const items = [];
  const numberOfItems = Math.floor(Math.random() * 6) + 5; // between 5 and 10 items

  for (let i = 0; i < numberOfItems; i++) {
    const randomItem =
      menuItems[cuisine][Math.floor(Math.random() * menuItems[cuisine].length)];
    items.push(randomItem);
  }

  return { cuisine, items };
}

// Function to get a random menu item from a given menu
function getRandomMenuItem(menu) {
  const randomIndex = Math.floor(Math.random() * menu.items.length);
  return menu.items[randomIndex];
}

// Function to get special alerts for a given set of menus
function getSpecialAlerts(menus) {
  const alerts = [];

  for (const restaurant in menus) {
    const menu = menus[restaurant];
    const specials = menu.items.filter((item) => item.isSpecial);

    if (specials.length > 0) {
      alerts.push({
        restaurant,
        specials: specials.map((item) => ({
          name: item.name,
          description: item.description,
          price: item.price,
        })),
      });
    }
  }

  return alerts;
}

// Export the functions for use in other modules
module.exports = {
  generateRandomMenu,
  getRandomMenuItem,
  getSpecialAlerts,
};
