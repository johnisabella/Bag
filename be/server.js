var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var db = require("./models");

var PORT = 3001;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

mongoose.Promise = Promise;
//mongoose.connect("mongodb://ec2-13-59-152-223.us-east-2.compute.amazonaws.com/Bags" , {
mongoose.connect("mongodb://localhost/BagsDB" , {
//useMongoClient: true
});

//"mongodb://localhost/Bags"
// app.get("/", function(req, res) {
//   res.json("Hello Bag People");
// });

// Route for getting all Articles from the db
app.get("/bags", function(req, res) {
  db.Bags.find({})
    .then(function(dbBags) {
      res.json(dbBags);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.post("/bags", function(req, res) {
  db.Bags.create(req.body)
  .then(function(dbBags) {
    res.json(dbBags);
  })
  .catch(function(err) {
    res.json(err);
  });
});

app.get("/api/username", function(req, res) {
  db.Users.find({})
    .then(function(dbUsers) {
      res.json(dbUsers);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.post("/api/username", function(req, res) {
  console.log("Hello World");
  console.log(req);
  db.Users.create(req.body)
  .then(function(dbUsers) {
    res.json(dbUsers);
    console.log("user is new");
  })
  .catch(function(err) {
    res.json(err);
    console.log("user exists");
  });
});

app.post("/bagitems", function(req, res) {
  db.BagItems.create(req.body)
  .then(function(dbBagItems) {
    return db.Bags.findOneAndUpdate({}, {$push: {BagItem: dbBagItems._id} }, {new: true});
  })
  .then(function(dbBags) {
    res.json(dbBags);
  })
  .catch(function(err) {
    res.json(err);
  });
});

//application is launched and listening on port specified by the variable PORT
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
