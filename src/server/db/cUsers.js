import { Query } from "./index";

const all = async () => Query("SELECT * FROM cUser JOIN pUser ON cUser.id = pUser.id;");

const one = async (id) => Query("SELECT * FROM cUser JOIN pUser ON cUser.id = pUser.id WHERE cUser.id = ?;", [id]);

const insert = (id, name, email, password, role, childid) => Query("INSERT INTO events (id, name, email, password, role, childid) VALUES (?, ?, ?, ?, ?, ?);", [id, name, email, password, role, childid]);



const update = (id, name, email, password, role, childid) => Query(`
UPDATE events
SET 
id = ?, 
name = ?, 
email = ?, 
password = ?, 
role = ?,
childid = ?
WHERE events.id = ?`, [id, name, email, password, role, childid]);
/* ? prevents users from creating their own auths */

const destroy = (id) => Query("DELETE FROM cUser WHERE cUser.id = ?;", [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}