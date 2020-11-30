import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await db.Chirps.all();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await db.Chirps.one(id);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const newUserName = req.body.name;
        const newChirpContent = req.body.content;

        const newUser = await db.Users.insert(newUserName);
        const newUserId = newUser.insertId;

        const newChirp = await db.Chirps.insert(newUserId, newChirpContent);
        res.status(200).send(`
        user created with id: ${newUserId}
        chirp created with id: ${newChirp.insertId}
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const newChirpContent = req.body.content;

        await db.Chirps.update(newChirpContent, id);
    
        res.status(200).send(`Updated chirp ${id}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        await db.Mentions.destroy(id);
        await db.Chirps.destroy(id);

        res.send(`chirp ${id} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router