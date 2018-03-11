const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db
  //   .collection("Todos")
  //   .find({ _id: new ObjectID("5aa4a40f2fb86bef6753d6c9") })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );

  db
    .collection("Todos")
    .find()
    .count()
    .then(
      count => {
        console.log("Todos: ", count);
      },
      err => {
        console.log("Unable to fetch todos", err);
      }
    );

  db.close();
});
