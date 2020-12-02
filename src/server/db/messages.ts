import { Query } from "./index";

const allMessages = (relationid) => Query(`SELECT * FROM messages WHERE messages.relationid = ?`, [relationid]);

const specificMessage = (relationid, childid, messageid) => Query(`SELECT * FROM messages WHERE messages.relationid = ? AND messages.childnum = ? AND messages.messageid = ?;`, [relationid, childid, messageid]);

const createMessage = (messageid, content, reqrelationid, reqchildid) => Query(`INSERT INTO messages (messageid, content, relationid, childnum) 
VALUES (?, ?, ?, ?);`, [messageid, content, reqrelationid, reqchildid]);

const updateMessage = (content, reqrelationid, reqchildid, reqmessageid) => Query(`
UPDATE messages
SET 
content = ? 
WHERE messages.relationid = ? AND messages.childnum = ? AND messages.messageid = ?;`, [content, reqrelationid, reqchildid, reqmessageid]);

const removeMessage = (relationid, childid, messageid) => Query(`DELETE FROM messages WHERE messages.relationid = ? AND messages.childnum = ? AND messages.messageid = ?;`, [relationid, childid, messageid]);

export default {
    allMessages,
    specificMessage,
    createMessage,
    updateMessage,
    removeMessage
}