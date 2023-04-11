const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('./knex');
const port = 3001;

app.set('port', port);

app.use(cors());
app.use(express.json());


app.listen(port, () => {
  console.log(`Server has started on port ${port} 💸 🔦 💫`);
});

// ROUTES

app.get('/api/v1/entries', async (req, res) => {
  try {
    const entries = await knex.select().from("entries");
    res.status(200).json(entries);
  } catch (error) {
    console.error(error.message);
  }
});