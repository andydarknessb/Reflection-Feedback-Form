const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.post("/", async (req, res) => {
    try{
        const { feeling } = req.body;
        const result = await pool.query(
            [feeling]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error saving feedback:", error);
        res.sendStatus(500);
    }
});

module.exports = router;