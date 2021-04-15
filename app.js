const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json("Hello World!");
});

// callback func after app.listen
app.listen(3000, () => {
    console.log("Server is now running");
});

module.exports = app;