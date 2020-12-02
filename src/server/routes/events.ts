import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/:reqrelationid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const data = await db.Events.retrieveallEvents(relationid)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqrelationid/:reqchildid/:reqeventid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        const eventid = req.params.reqeventid;
        const data = await db.Events.retrievespecEvent(reqrelationid, reqchildid, eventid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/:reqrelationid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;        
        res.json(await db.Events.createEvent(req.body.title, req.body.location, req.body.time, req.body.duedate, req.body.mandatorytask, req.body.completedtask, reqrelationid, req.body.childnum));
        res.status(200).send(`
        ${req.body.title} Event has been created
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqrelationid/:reqchildid/:eventid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        const eventid = req.params.eventid;
        await db.Events.updateEvent(req.body.title, req.body.location, req.body.time, req.body.duedate, req.body.mandatorytask, req.body.completedtask, reqrelationid, reqchildid, eventid);
        res.status(200).send(`Updated event ${eventid}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqrelationid/:reqchildid/:reqeventid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        const eventid = req.params.reqeventid;
        await db.Events.removeEvent(reqrelationid, reqchildid, eventid);
        res.send(`event ${eventid} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router