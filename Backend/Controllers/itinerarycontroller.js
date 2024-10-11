const Itinerary = require('../models/Itinerary');

// Create a new itinerary
exports.createItinerary = async (req, res) => {
  const { userId, destinations } = req.body;

  try {
    // Create a new itinerary
    const newItinerary = new Itinerary({ userId, destinations });
    await newItinerary.save();
    res.status(201).json(newItinerary);
  } catch (error) {
    res.status(500).json({ message: 'Itinerary creation failed', error });
  }
};

// Get itineraries for a specific user
exports.getItineraries = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find itineraries associated with the user
    const itineraries = await Itinerary.find({ userId });
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch itineraries', error });
  }
};
