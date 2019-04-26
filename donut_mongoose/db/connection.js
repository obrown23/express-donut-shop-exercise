// requirements: import mongoose
const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/the-donut-shop";


// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("Connected to MongoDB");
  });

// export your mongoose connection
module.exports = mongoose;
