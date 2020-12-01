import * as mysql from "mysql";
import Events from "./events";
import cUsers from "./cUsers";
import Category from "./category";

export const Connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "eventsapp",
    password: "group1",
    database: "calendar"
});

export const Query = (query, values) => {
    return new ((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export default {
    Events,
    cUsers,
    Category
}