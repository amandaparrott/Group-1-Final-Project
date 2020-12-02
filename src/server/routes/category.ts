import * as express from "express";
import { OkPacket } from "mysql";
import db from "../db";

const router = express.Router();

router.get("/:reqrelationid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const data = await db.Category.allCategory(relationid)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get("/:reqrelationid/:reqchildid/:reqcategoryid", async (req, res) => {
    try {
        const relationid = req.params.reqrelationid;
        const childid = req.params.reqchildid;
        const categoryid = req.params.reqcategoryid;
        const data = await db.Category.specificCategory(relationid, childid, categoryid);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/:reqrelationid/:reqchildid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        res.json(await db.Category.createCategory(req.body.categoryid, req.body.name, reqrelationid, reqchildid));
        res.status(200).send(`
        ${req.body.role} User ${req.body.name} has been added
        `);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.put("/:reqrelationid/:reqchildid/:reqcategoryid", async (req, res) => {
    try {
        const reqrelationid = req.params.reqrelationid;
        const reqchildid = req.params.reqchildid;
        const reqcategoryid = req.params.reqcategoryid;
        await db.Category.updateCategory(req.body.name, reqrelationid, reqchildid, reqcategoryid);
        res.status(200).send(`Updated the category name to ${req.body.name}`)
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
        await db.Category.removeCategory(relationid, childid, categoryid);
        res.send(`category ${categoryid} with relation ${relationid} was removed`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router