module.exports = {
  database: "ntask",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    define: {
      underscored: true
    }
  },
  // jwtSecret: "Nta$K-Ap1",
  jwtSecret: "NTASK_API",
  jwtSession: {session: false}
};
