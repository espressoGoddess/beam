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

app.post('/api/v1/entries', async (req, res) => {
  try {
    const newEntry = req.body;
    await knex("entries").insert(newEntry);
    res.status(201).json(newEntry);
  } catch (error) {
    console.error(error.message);
  }
});

app.put('/api/v1/entries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { journal_entry } = req.body;
    await knex("entries").where({ entry_id: id }).update({ journal_entry: journal_entry });
      res.status(202).json(`Entry ${id} was updated successfully`);
  } catch (error) {
    console.error(error.message);
  }
})