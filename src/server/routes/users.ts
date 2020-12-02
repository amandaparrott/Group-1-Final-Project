import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/:reqrelationid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const data = await db.Users.allusers(relationid)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqrelationid/:reqchildid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const childid = req.params.reqchildid;
        const data = await db.Users.specificchild(relationid, childid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/:reqrelationid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        res.json(await db.Users.createUser(req.body.name, req.body.email, req.body.password, req.body.role, reqrelationid, req.body.childnum));
        res.status(200).send(`
        ${req.body.role} User ${req.body.name} has been added
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqrelationid/:reqchildid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        await db.Users.updateUser(req.body.name, req.body.email, req.body.password, req.body.role, req.body.relationid, req.body.childnum, reqrelationid, reqchildid);
        res.status(200).send(`Updated ${req.body.role} user ${req.body.name} profile information`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:reqrelationid/:reqchildid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const childid = req.params.reqchildid;
        await db.Users.removeChild(relationid, childid);
        res.send(`child ${childid} with relation ${relationid} was removed from users`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router