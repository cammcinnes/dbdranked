const express = require('express');
const cors = require('cors');
const rankRoutes = require('./routes/rank');
const pool = require("./db");

// Load environment variables from .env file
// Ensure your .env file has the required database credentials.
const loadEnvFile = require('./utils/envUtil');
const envVariables = loadEnvFile('./.env');

const PORT = envVariables.PORT;
const app = express();

app.use(cors());
app.use(express.json());

//mount the router
app.use('/rank', rankRoutes);

// app.post("/", async(req, res) => {
//   try {
//     const { steamid, rank } = req.body;
//     const newrank = await poo
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});