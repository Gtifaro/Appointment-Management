const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");

//Config
app.set("port", process.env.PORT || 3000);

//Watching tools
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/medics", require("./routes/medics.routes"));

//Static
app.use(express.static(path.join(__dirname, "public")));

//Start server on port 3000
app.listen(app.get("port"), () => {
    console.log("Server running on port " + app.get("port"));
});