import * as express from "express";
import * as path from "path";
import apiRouter from "./routes";

const app = express();

app.use(express.json());
app.use("/api", apiRouter);
app.use(express.static("public"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(3000, () => console.log("Server listening on port 3000"));