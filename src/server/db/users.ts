import { Query } from "./index";

const allusers = (relationid) => Query(`SELECT * FROM users WHERE users.relationid = ?;`, [relationid]);

const specificchild = (relationid, childid) => Query(`SELECT * FROM users WHERE users.relationid = ? AND users.childnum = ?;`, [relationid, childid]);

const createUser = (name, email, password, role, reqrelationid, childnum) => Query(`INSERT INTO users (name, email, password, role, relationid, childnum) 
VALUES (?, ?, ?, ?, ?, ?);`, [name, email, password, role, reqrelationid, childnum]);

const updateUser = (name, email, password, role, relationid, childnum, reqrelationid, reqchildid) => Query(`
UPDATE users
SET 
name = ?, 
email = ?, 
password = ?, 
role = ?, 
relationid = ?, 
childnum = ?
WHERE users.relationid = ? AND users.childnum = ?;`, [name, email, password, role, relationid, childnum, reqrelationid, reqchildid]);
/* ? prevents users from creating their own auths */

const removeChild = (relationid, childid) => Query("DELETE FROM users WHERE users.relationid = ? AND users.childnum = ?;", [relationid, childid]);

export default {
    allusers,
    specificchild,
    createUser,
    updateUser,
    removeChild
}