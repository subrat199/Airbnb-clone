const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PropertyListing = require("../Models/PropertyListing");
const PropertyRouter = express.Router();
const port = 3000;
PropertyRouter.use(bodyParser.json());

PropertyRouter.post("/listings", async (req, res) => {
  try {
    const listing = new PropertyListing(req.body);
    await listing.save();
    res.status(201).send(listing);
  } catch (error) {
    res.status(400).send(error);
  }
});
PropertyRouter.get("/", async (req, res) => {
  try {
    const listings = await PropertyListing.find();
    res.send(listings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define other routes and middleware here

module.exports = { PropertyRouter };
