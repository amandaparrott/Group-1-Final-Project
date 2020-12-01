import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await db.events.all();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await db.events.one(id);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const neweventName = req.body.name;
        const neweventContent = req.body.content;

        const newevent = await db.event.insert(neweventName);
        const neweventId = newevent.insertId;

        const newTask = await db.events.insert(neweventId, neweventContent);
        res.status(200).send(`
        user created with id: ${neweventId}
        event created with id: ${newTask.insertId}
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const neweventsContent = req.body.content;

        await db.events.update(neweventsContent, id);
    
        res.status(200).send(`Updated event ${id}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

       
        await db.events.destroy(id);

        res.send(`event ${id} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router