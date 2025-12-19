require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ConnexionDb = require('./src/config/mongo');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('EcoTrack User Service is running');
});
app.get('/test', async (req, res) => {
  try {
    await ConnexionDb();
    res.send('Test route is working');
  } catch (error) {
    res.status(500).send('Erreur du serveur');
  }

});

async function startServer() {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Impossible de démarrer le serveur, la connexion à la BD a échoué.', err);
    process.exit(1);
  }
}
startServer();

