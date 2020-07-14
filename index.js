// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Array for filled tables

const filledTables = [{
    customerName: "jim bob",
    customerEmail: "jimbob@example.com",
    phoneNumber: 5038675309,
    customerID: "jimbob4ever"
}];

// Array for waiting list

const waitingList = [{
    customerName: "bill bob",
    customerEmail: "billbob@example.com",
    phoneNumber: 5038675308,
    customerID: "billbob4ever"
}]

// On start go to index
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Returns all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// if no tables available sends info to wait list
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
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