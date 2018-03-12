const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  //deleteMany
  // db
  //   .collection("Todos")
  //   .deleteMany({ text: "Cook patties" })
  //   .then(result => {
  //     console.log(result);
  //   });

  //deleteOne
  // db
  //   .collection("Todos")
  //   .deleteOne({
  //     text: "Eat dinner"
  //   })
  //   .then(result => {
  //     console.log(result);
  //   });

  //findOneAndDelete
  // db
  //   .collection("Todos")
  //   .findOneAndDelete({ text: "Eat dinner" })
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection("Users")
    .findOneAndDelete({ _id: new ObjectID("5aa5d5d32fb86bef6753e3e0") })
    .then(result => {
      console.log(result);
    });

  // db.close();
});
