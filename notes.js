// Week 9
// npm install
//mongod --dbpath yourdbpath (This starts mongod)

db.flowers.remove(
    deleteButtonPressed,
    {
     justOne: true,
        writeConcern: deleteButtonPressed
    }
);

db.flowers.drop(true);