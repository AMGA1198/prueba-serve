module.exports = {
  HOST: "45.33.78.30",
  USER: "holyexpr_testdb",
  PASSWORD: "holyexpress",
  DB: "holyexpr_testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
