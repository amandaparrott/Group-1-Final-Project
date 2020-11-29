import { Query } from "./index";

const all = async () => Query("SELECT * FROM events JOIN pUser ON events.id = pUser.id;");

const one = async (id) => Query("SELECT * FROM events JOIN pUser ON events.id = pUser.id WHERE events.id = ?;", [id]);

const insert = (id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid) => Query("INSERT INTO events (id, title, location, time, duedate, mandatorytask, completedtask, categoryid) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", [id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid]);



const update = (id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid) => Query(`
UPDATE events
SET 
title = ?, 
location = ?, 
time = ?, 
duedate = ?, 
mandatorytask = ?, 
completedtask = ?, 
categoryid = ?,
childid = ?, 
WHERE events.id = ?`, [id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid]);
/* ? prevents users from creating their own auths */

const destroy = (id) => Query("DELETE FROM events WHERE events.id = ?;", [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}