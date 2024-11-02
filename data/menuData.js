// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

const cuisines = ["Italian", "Chinese", "Vegan", "Mexican", "Indian"];

const menuItems = {
  Italian: [
    {
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish",
      price: 12.99,
    },
    {
      name: "Margherita Pizza",
      description: "Tomato, mozzarella, and basil",
      price: 10.99,
    },
    {
      name: "Lasagna",
      description: "Layers of pasta, meat, and cheese",
      price: 14.99,
    },
  ],
  Chinese: [
    {
      name: "Kung Pao Chicken",
      description: "Spicy stir-fry chicken with peanuts",
      price: 11.99,
    },
    {
      name: "Sweet and Sour Pork",
      description: "Pork with a tangy sauce",
      price: 10.99,
    },
    {
      name: "Spring Rolls",
      description: "Crispy rolls with vegetables",
      price: 6.99,
    },
  ],
  Vegan: [
    {
      name: "Vegan Burger",
      description: "Plant-based burger with lettuce and tomato",
      price: 9.99,
    },
    {
      name: "Quinoa Salad",
      description: "Healthy salad with quinoa and vegetables",
      price: 8.99,
    },
    {
      name: "Vegan Tacos",
      description: "Tacos with vegan fillings",
      price: 7.99,
    },
  ],
  Mexican: [
    {
      name: "Tacos",
      description: "Soft tortillas with various fillings",
      price: 8.99,
    },
    {
      name: "Burrito",
      description: "Large flour tortilla with fillings",
      price: 9.99,
    },
    {
      name: "Quesadilla",
      description: "Grilled tortilla with cheese",
      price: 7.99,
    },
  ],
  Indian: [
    {
      name: "Butter Chicken",
      description: "Creamy tomato-based chicken curry",
      price: 12.99,
    },
    {
      name: "Palak Paneer",
      description: "Spinach and cottage cheese curry",
      price: 10.99,
    },
    {
      name: "Chole Bhature",
      description: "Spicy chickpeas with fried bread",
      price: 9.99,
    },
  ],
};

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomMenu() {
  const cuisine = getRandomElement(cuisines);
  const items = menuItems[cuisine];
  const menu = [];
  const itemCount = Math.floor(Math.random() * 6) + 5;

  for (let i = 0; i < itemCount; i++) {
    const item = { ...getRandomElement(items), isSpecial: Math.random() < 0.2 };
    menu.push(item);
  }

  return { cuisine, items: menu };
}

const restaurants = [
  { id: "1", name: "The Gourmet Bistro" },
  { id: "2", name: "Spicy Kitchen" },
  { id: "3", name: "Healthy Eats" },
  { id: "4", name: "Comfort Diner" },
  { id: "5", name: "Sweet Tooth Bakery" },
];

const menus = restaurants.reduce((acc, restaurant) => {
  acc[restaurant.name] = generateRandomMenu();
  return acc;
}, {});

module.exports = { restaurants, menus, generateRandomMenu };
