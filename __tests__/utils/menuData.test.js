// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

const {
  generateRandomMenu,
  getRandomMenuItem,
  getSpecialAlerts,
} = require("../../data/menuData");
const cuisines = ["Italian", "Chinese", "Vegan", "Mexican", "Indian"];

describe("Menu Data Functions", () => {
  // Test for generateRandomMenu function
  test("generateRandomMenu generates a menu with valid items", () => {
    // Generate a random menu
    const menu = generateRandomMenu();

    // Ensure the menu has a valid cuisine
    expect(cuisines).toContain(menu.cuisine);

    // Ensure the menu has between 5 and 10 items
    expect(menu.items.length).toBeGreaterThanOrEqual(5);
    expect(menu.items.length).toBeLessThanOrEqual(10);

    // Ensure each item in the menu has the required properties
    menu.items.forEach((item) => {
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("price");
      expect(item).toHaveProperty("isSpecial");
    });
  });

  // Test for getRandomMenuItem function
  test("getRandomMenuItem returns a valid menu item", () => {
    // Generate a random menu
    const menu = generateRandomMenu();

    // Get a random menu item from the menu
    const item = getRandomMenuItem(menu);

    // Ensure the item is part of the menu items
    expect(menu.items).toContainEqual(item);
  });

  // Test for getSpecialAlerts function
  test("getSpecialAlerts returns valid alerts", () => {
    // Generate random menus for multiple restaurants
    const menus = {
      "The Gourmet Bistro": generateRandomMenu(),
      "Spicy Kitchen": generateRandomMenu(),
      "Healthy Eats": generateRandomMenu(),
      "Comfort Diner": generateRandomMenu(),
      "Sweet Tooth Bakery": generateRandomMenu(),
    };

    // Get special alerts for the menus
    const alerts = getSpecialAlerts(menus);

    // Ensure each alert has the required properties
    alerts.forEach((alert) => {
      expect(alert).toHaveProperty("restaurant");
      expect(alert).toHaveProperty("specials");
      alert.specials.forEach((special) => {
        expect(special).toHaveProperty("name");
        expect(special).toHaveProperty("description");
        expect(special).toHaveProperty("price");
      });
    });
  });
});
