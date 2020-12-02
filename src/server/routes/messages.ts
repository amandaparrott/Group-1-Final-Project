import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/:reqrelationid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const data = await db.Messages.allMessages(relationid)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqrelationid/:reqchildid/:reqmessageid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const childid = req.params.reqchildid;
        const messageid = req.params.reqmessageid;
        const data = await db.Messages.specificMessage(relationid, childid, messageid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/:reqrelationid/:reqchildid/", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        res.json(await db.Messages.createMessage(req.body.messageid, req.body.content, reqrelationid, reqchildid));
        res.status(200).send(`
        ${req.body.messageid} - message created
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqrelationid/:reqchildid/:reqmessageid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        const reqmessageid = req.params.reqmessageid;
        await db.Messages.updateMessage(req.body.content, reqrelationid, reqchildid, reqmessageid);
        res.status(200).send(`Message Edited`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqrelationid/:reqchildid/:reqmessageid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const childid = req.params.reqchildid;
        const messageid = req.params.reqmessageid;
        await db.Messages.removeMessage(relationid, childid, messageid);
        res.send(`message ${messageid} with relation ${relationid} was removed`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router