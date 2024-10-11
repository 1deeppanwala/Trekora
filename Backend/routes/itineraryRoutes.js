const express = require('express');
const {
  createItinerary,
  getItineraries,
  updateItinerary,
  deleteItinerary,
} = require('../controllers/itineraryController');
const authMiddleware = require('../middleware/authMiddleware'); 

const router = express.Router();

// Create a new itinerary
router.post('/', authMiddleware, createItinerary);

// Get all itineraries for a user
router.get('/', authMiddleware, getItineraries);

// Update an itinerary by ID
router.put('/:id', authMiddleware, updateItinerary);

// Delete an itinerary by ID
router.delete('/:id', authMiddleware, deleteItinerary);

module.exports = router;
