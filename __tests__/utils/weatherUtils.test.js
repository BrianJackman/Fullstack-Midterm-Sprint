const { Cuisines, Dishes } = require("../../utils/data");
const {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
} = require("../../utils/restaurantUtils");

describe("Restaurant Functions", () => {
  // Test for generateRandomMenuItem function
  describe("generateRandomMenuItem", () => {
    test("should generate a valid menu item", () => {
      // Generate a random menu item
      const item = generateRandomMenuItem();

      // Ensure the item has the required properties
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("price");
      expect(item).toHaveProperty("isSpecial");
    });
  });

  // Test for generateMenu function
  describe("generateMenu", () => {
    test("should generate a menu with valid items", () => {
      // Select a random cuisine
      const cuisine = selectRandomCuisine();

      // Generate a menu for the selected cuisine
      const menu = generateMenu(cuisine);

      // Ensure the menu has a valid cuisine
      expect(Cuisines).toContain(menu.cuisine);

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
  });

  // Test for selectRandomCuisine function
  describe("selectRandomCuisine", () => {
    test("should select a valid cuisine", () => {
      // Select a random cuisine
      const cuisine = selectRandomCuisine();

      // Ensure the selected cuisine is valid
      expect(Cuisines).toContain(cuisine);
    });
  });
});
