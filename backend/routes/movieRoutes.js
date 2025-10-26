// routes/movieRoutes.js
const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const fs = require("fs");
const path = require("path");

router.post("/add-movies", async (req, res) => {
  try {
    const uploadsPath = path.join(__dirname, "../uploads"); // adjust if needed
    const files = fs.readdirSync(uploadsPath);

    const movies = files.map((file) => {
      const fileNameWithoutExt = path.parse(file).name;
      return {
        title: fileNameWithoutExt.charAt(0).toUpperCase() + fileNameWithoutExt.slice(1),
        year: 2020,
        description: `${fileNameWithoutExt} movie description.`,
        posterUrl: `/uploads/${file}`,
      };
    });

    await Movie.insertMany(movies, { ordered: false });
    res.status(201).json({ message: `${movies.length} movies added successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding movies" });
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movies" });
  }
});

module.exports = router;
