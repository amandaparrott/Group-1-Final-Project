import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/:reqrelationid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const data = await db.Reminders.allReminders(relationid)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqrelationid/:reqchildid/:reqreminderid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const childid = req.params.reqchildid;
        const reminderid = req.params.reqreminderid;
        const data = await db.Reminders.specificReminder(relationid, childid, reminderid);
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
        res.json(await db.Reminders.createReminder(req.body.reminderid, req.body.content, reqrelationid, reqchildid));
        res.status(200).send(`
        ${req.body.reminderid} - reminder created
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqrelationid/:reqchildid/:reqreminderid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        const reqreminderid = req.params.reqreminderid;
        await db.Reminders.updateReminder(req.body.content, reqrelationid, reqchildid, reqreminderid);
        res.status(200).send(`Edited reminder`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqrelationid/:reqchildid/:reqcategoryid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const childid = req.params.reqchildid;
        const categoryid = req.params.reqcategoryid;
        await db.Reminders.removeReminder(relationid, childid, categoryid);
        res.send(`category ${categoryid} with relation ${relationid} was removed`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router