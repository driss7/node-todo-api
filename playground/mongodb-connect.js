const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  db.collection("Todos").insertOne(
    {
      text: "Cook patties",
      completed: false
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todo");
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  db.collection("Users").insertOne(
    {
      name: "Idris",
      age: 27,
      location: "St. Louis"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert into Users");
      }

      console.log(JSON.stringify(result, undefined, 2));
    }
  );
  db.close();
});
