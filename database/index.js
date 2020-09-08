const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Experience = require("./experience.js");

mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

const mongooseConnection = "mongodb://mongo/fec-airbnb";

mongoose
  .connect(mongooseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error: ", err));

const getExperiences = (expId) => {
  const experienceId = expId;

  return new Promise((resolve, reject) => {
    Experience.find({ experienceId }).exec((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { db, getExperiences };
