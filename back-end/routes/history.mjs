import express from "express";
import History from "../db/models/history.mjs";

const router = express.Router();

router.get("/:title", async (req, res) => {
    var title = req.params.title;
    var history = await History.find({ title: title });
    history.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);
    res.send(history);
});

export default router; 