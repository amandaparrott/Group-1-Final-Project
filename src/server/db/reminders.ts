import { Query } from "./index";

const allReminders = (relationid) => Query(`SELECT * FROM reminders WHERE reminders.relationid = ?`, [relationid]);

const specificReminder = (relationid, childid, reminderid) => Query(`SELECT * FROM reminders WHERE reminders.relationid = ? AND reminders.childnum = ? AND reminders.reminderid = ?;`, [relationid, childid, reminderid]);

const createReminder = (reminderid, content, reqrelationid, reqchildid) => Query(`INSERT INTO reminders (reminderid, content, relationid, childnum) 
VALUES (?, ?, ?, ?);`, [reminderid, content, reqrelationid, reqchildid]);

const updateReminder = (content, reqrelationid, reqchildid, reqreminderid) => Query(`
UPDATE reminders
SET 
content = ? 
WHERE reminders.relationid = ? AND reminders.childnum = ? AND reminders.reminderid = ?;`, [content, reqrelationid, reqchildid, reqreminderid]);

const removeReminder = (relationid, childid, reminderid) => Query(`DELETE FROM reminders WHERE reminders.relationid = ? AND reminders.childnum = ? AND reminders.reminderid = ?;`, [relationid, childid, reminderid]);

export default {
    allReminders,
    specificReminder,
    createReminder,
    updateReminder,
    removeReminder
}