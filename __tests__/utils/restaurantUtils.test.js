// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

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
      const item = generateRandomMenuItem();
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("price");
      expect(item).toHaveProperty("isSpecial");
    });
  });

  // Test for generateMenu function
  describe("generateMenu", () => {
    test("should generate a menu with valid items", () => {
      const cuisine = selectRandomCuisine();
      const menu = generateMenu(cuisine);
      expect(Cuisines).toContain(menu.cuisine);
      expect(menu.items.length).toBeGreaterThanOrEqual(5);
      expect(menu.items.length).toBeLessThanOrEqual(10);
      const itemNames = menu.items.map((item) => item.name);
      const uniqueItemNames = new Set(itemNames);
      expect(itemNames.length).toBe(uniqueItemNames.size); // Ensure no duplicates
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
      const cuisine = selectRandomCuisine();
      expect(Cuisines).toContain(cuisine);
    });
  });
});
