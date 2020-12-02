import { Query } from "./index";

const retrieveallEvents = (relationid) => Query(`SELECT * FROM events WHERE events.relationid = ?;`, [relationid]);

const retrievespecEvent = (reqrelationid, reqchildid, eventid) => Query("SELECT * FROM events WHERE events.relationid = ? AND events.childnum = ? AND events.id = ?;", [reqrelationid, reqchildid, eventid]);

const createEvent = (title, location, time, duedate, mandatorytask, completedtask, reqrelationid, childnum) => Query(`INSERT INTO events (title, location, time, duedate, mandatorytask, completedtask, relationid, childnum) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?);`, [title, location, time, duedate, mandatorytask, completedtask, reqrelationid, childnum]);

const updateEvent = (title, location, time, duedate, mandatorytask, completedtask, reqrelationid, reqchildid, eventid) => Query(`
UPDATE events
SET 
title = ?, 
location = ?, 
time = ?, 
duedate = ?, 
mandatorytask = ?, 
completedtask = ?
WHERE events.relationid = ? AND events.childnum = ? AND events.id = ?;`, [title, location, time, duedate, mandatorytask, completedtask, reqrelationid, reqchildid, eventid]);

const removeEvent = (reqrelationid, reqchildid, eventid) => Query(`DELETE FROM events WHERE events.relationid = ? AND events.childnum = ? AND events.id = ?;`, [reqrelationid, reqchildid, eventid]);

export default {
    retrieveallEvents,
    retrievespecEvent,
    createEvent,
    updateEvent,
    removeEvent
}