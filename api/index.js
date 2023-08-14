const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("./knex");
const port = 3001;

app.set("port", port);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server has started on port ${port} 💸 🔦 💫`);
});

// ROUTES

app.get("/api/v1/entries", async (req, res) => {
  try {
    const entries = await knex.select().from("entries");
    res.status(200).json(entries);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/api/v1/entries", async (req, res) => {
  const newEntry = req.body;

  for (let parameter of [
    "user_id",
    "date",
    "feeling",
    "activity",
    "journal_entry",
  ]) {
    if (!newEntry[parameter]) {
      return res
        .status(422)
        .json({
          message: `You are missing a required parameter of ${parameter}.`,
        });
    }
  }

  try {
    await knex("entries").insert(newEntry);
    res.status(201).json(newEntry);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/api/v1/entries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { journal_entry } = req.body;
    const dbId = await knex("entries")
      .select("entry_id")
      .where({ entry_id: id });

    if (!dbId[0]?.entry_id) {
      res
        .status(400)
        .json({ message: `An entry with the id of ${id} was not found.` });
    } else {
      await knex("entries")
        .where({ entry_id: id })
        .update({ journal_entry: journal_entry });
      res.status(202).json({ message: `Entry ${id} was updated successfully` });
    }
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = app;
