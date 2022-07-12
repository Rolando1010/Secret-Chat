const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.set('views', path.join(__dirname + '/../templates'));
app.engine('html', require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "../static")));
app.use(express.json());

app.use("/", require("./web/routes"));
app.use("/api", require("./api/routes"));
app.use("*", (request, response) => response.send("Página no encontrada"));

app.listen(app.get("port"),() => {
    console.log(`Server initialized in port ${app.get("port")}....`);
});