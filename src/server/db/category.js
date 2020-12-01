import { Query } from "./index";

const all = async () => Query("SELECT * FROM category JOIN cUser ON category.id = events.id;");

const one = async (id) => Query("SELECT * FROM category JOIN cUser ON category.id = cUser.id WHERE category.id = ?;", [id]);

const insert = (id, name) => Query("INSERT INTO events (id, name) VALUES (?, ?);", [id, name]);

const update = (id, name) => Query(`
UPDATE events
SET 
name = ?
WHERE category.id = ?`, [id, name]);
/* ? prevents users from creating their own auths */

const destroy = (id) => Query("DELETE FROM category WHERE category.id = ?;", [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}