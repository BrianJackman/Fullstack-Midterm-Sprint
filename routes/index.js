// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

const { Restaurants, Cuisines } = require("./utils/data");
const express = require("express");
const path = require("path");
const {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
} = require("./utils/restaurantUtils");

const app = express();
let restaurantData = {}; // This should be populated soon

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
app.get("/", (request, response) => {
  response.render("index", { restaurants: Restaurants });
});

/**
 * GET /menu
 * Displays the menu for the selected restaurant.
 */
app.get("/menu", (request, response) => {
  const restaurantId = parseInt(request.query.restaurantId, 10);
  console.log("Restaurant ID:", restaurantId); // Debugging statement
  const restaurant = Restaurants.find((r) => r.id === restaurantId);
  if (!restaurant) {
    console.log("Restaurant not found"); // Debugging statement
    return response.status(404).send("Restaurant not found");
  }
  const cuisine = selectRandomCuisine();
  console.log("Selected Cuisine:", cuisine); // Debugging statement
  const menu = generateMenu(cuisine);
  console.log("Generated Menu:", menu); // Debugging statement
  response.render("menu", { restaurant: restaurant.name, menu });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
