const pgp = require("pg-promise")({
    query: e => {
      console.log("QUERY:", e.query);
    }
  });
  
  const options = {
    host: "localhost",
    database: "reactblog"
  };
  
  const db = pgp(options);
  
  module.exports = db;