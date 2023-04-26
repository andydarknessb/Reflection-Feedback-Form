const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", async (req, res) => {
    try {
      const { feeling, understanding, support, comments } = req.body;
  
      const queryText = 'INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4) RETURNING id';
      const queryParams = [feeling, understanding, support, comments];
  
      const result = await pool.query(queryText, queryParams);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error saving feedback:", error);
      res.sendStatus(500);
    }
  });

module.exports = router;