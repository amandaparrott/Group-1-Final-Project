import * as mysql from "mysql";
import Events from "./events";
import Users from "./users";
import Category from "./category";
import Reminders from "./reminders";
import Messages from "./messages";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "eventsapp",
  password: "group1",
  database: "calendar",
});

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
  });
});
};

export default {
  Events,
  Users,
  Category,
  Reminders,
  Messages
};
