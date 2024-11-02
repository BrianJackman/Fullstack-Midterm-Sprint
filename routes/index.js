// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

const express = require("express");
const router = express.Router();
const { restaurants, menus, generateRandomMenu } = require("../data/menuData");

router.get("/", (req, res) => {
  console.log("Rendering index page with restaurants");
  res.render("index", { restaurants });
});

router.get("/restaurant", (req, res) => {
  const restaurantId = req.query.restaurantId;
  console.log(`Requested restaurant ID: ${restaurantId}`);

  const restaurant = restaurants.find((r) => r.id === restaurantId);
  if (!restaurant) {
    console.error("Restaurant not found");
    return res.status(404).send("Restaurant not found");
  }

  console.log(`Found restaurant: ${restaurant.name}`);

  const menu = menus[restaurant.name];
  if (!menu) {
    console.error("Menu not found for restaurant");
    return res.status(404).send("Menu not found for restaurant");
  }

  console.log(`Menu: ${JSON.stringify(menu)}`);
  res.render("menu", { restaurant: restaurant.name, menu });
});

module.exports = router;
