const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Root and test routes
app.get('/', (req, res) => {
  res.send('EcoTrack User Service is running');
});

app.get('/test', (req, res) => {
  res.send('Test route is working');
});

// Mount user routes
app.use('/users', userRoutes);

module.exports = app;