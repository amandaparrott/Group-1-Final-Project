import { Query } from "./index";

const allCategory = (relationid) => Query(`SELECT * FROM category WHERE category.relationid = ?`, [relationid]);

const specificCategory = (relationid, childid, categoryid) => Query(`SELECT * FROM category WHERE category.relationid = ? AND category.childnum = ? AND category.categoryid = ?;`, [relationid, childid, categoryid]);

const createCategory = (categoryid, name, reqrelationid, reqchildid) => Query(`INSERT INTO category (categoryid, name, relationid, childnum) 
VALUES (?, ?, ?, ?);`, [categoryid, name, reqrelationid, reqchildid]);

const updateCategory = (name, reqrelationid, reqchildid, reqcategoryid) => Query(`
UPDATE category
SET 
name = ? 
WHERE category.relationid = ? AND category.childnum = ? AND category.categoryid = ?;`, [name, reqrelationid, reqchildid, reqcategoryid]);

const removeCategory = (relationid, childid, categoryid) => Query(`DELETE FROM category WHERE category.relationid = ? AND category.childnum = ? AND category.categoryid = ?;`, [relationid, childid, categoryid]);

export default {
    allCategory,
    specificCategory,
    createCategory,
    updateCategory,
    removeCategory
}