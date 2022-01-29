var express = require("express");
var path = require("path");
const internal = require("stream");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var reservations = [{
    name: "",
    number: "",
    email: "",
    id: "",
    
}]

module.exports = {reservations}

var waitingList = [{
  name: "",
  number: "",
  email: "",
  id: ""
}]

var tables =[{
  number: ""
}]
var tabN = 0;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


  app.get("/tables", function(req, res) {
    return res.json(tables);
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitingList)
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.post("/api/tables", function(req, res) {

    var newTable = req.body;

    newTable.routeName = newTable +tablesN
  
    tables.push(newTable);
  
    res.json(newTable);
  });

  app.post("/api/reserve", function(req, res) {
    var newReserve = req.body;
    
    if(tabN <= 5){
    
      console.log(newReserve);
      reservations.push(newReserve);
      tabN +=1;
      console.log(tabN);
      tables.push(tabN);
      res.json(true);
    }else {
      waitingList.push(newReserve)
      res.json(false)
      console.log("on waiting list")
    }
   
  });



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });