// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const jQuery = require('jQuery')
// const popper = require('popper')
// const bootstrap = require('bootstrap')

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Array for filled tables

const filledTables = [{
    customerName: "jim bob",
    phoneNumber: 5038675309,
    customerEmail: "jimbob@example.com",
    customerID: "jimbob4ever"
}];

// Array for waiting list

const waitingList = [{
    customerName: "bill bob",
    phoneNumber: 5038675308,
    customerEmail: "billbob@example.com",
    customerID: "billbob4ever"
}]

// On start go to index
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/reserve.html"));
});

// Returns all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// push newTable info to filledTable or waitingListArray
app.get("/api/tables", function (req, res) {
    for (var i = 5; i < filledTables.length; i++) {
        filledTables.push(newTable)
    }

    waitingList.push(newTable)
});


// POSTs information to server
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newTable
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});