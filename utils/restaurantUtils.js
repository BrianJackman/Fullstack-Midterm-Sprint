// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

const { Cuisines, Dishes } = require("./data");

// Function to generate a random menu item for a randomly selected cuisine
function generateRandomMenuItem() {
  const cuisine = selectRandomCuisine();
  const dish =
    Dishes[cuisine][Math.floor(Math.random() * Dishes[cuisine].length)];
  return {
    name: dish.name,
    description: dish.description,
    price: dish.price,
    isSpecial: dish.isSpecial,
  };
}

// Function to generate a menu with between 5 and 10 unique items for a given cuisine
function generateMenu(cuisine) {
  const items = [];
  const availableDishes = Dishes[cuisine];
  const numberOfItems = Math.min(
    Math.floor(Math.random() * 6) + 5,
    availableDishes.length
  ); // between 5 and 10 items, but not more than available dishes
  const usedIndices = new Set();

  while (items.length < numberOfItems) {
    const randomIndex = Math.floor(Math.random() * availableDishes.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      items.push(availableDishes[randomIndex]);
    }
  }

  return { cuisine, items };
}

// Function to select a random cuisine from the list of cuisines
function selectRandomCuisine() {
  return Cuisines[Math.floor(Math.random() * Cuisines.length)];
}

// Function to generate special alerts for a restaurant
function getSpecialAlerts(restaurant) {
  const alerts = [];
  if (Math.random() > 0.5) {
    alerts.push("Special event: Live music tonight!");
  }
  if (Math.random() > 0.5) {
    alerts.push("Dish of the day: Chef's special pasta!");
  }
  return alerts;
}

// Export the functions for use in other modules
module.exports = {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
  getSpecialAlerts,
};
