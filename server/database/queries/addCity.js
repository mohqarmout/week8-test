const dbConnection = require("../config/connection");

const postData = userData => {
  const { name, country } = userData;
  const sql = {
    text: "INSERT INTO users (name, country) VALUES ($1, $2);",
    values: [name, country]
  };
  return dbConnection.query(sql);
};

module.exports = {
  addCity
};
