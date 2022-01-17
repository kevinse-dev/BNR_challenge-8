// setup database here, change the values to suit your environment
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: null,
  DB: "db_cc8",
  dialect: "mysql",
  PORT:"3306",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
