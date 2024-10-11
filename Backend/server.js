const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

const DB_URL = 'mongodb://localhost:27017/trekora'; 
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/itinerary', itineraryRoutes); // Itinerary routes

app.get('/', (req, res) => {
  res.send('Welcome to the Trekora API!');
});


const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});
