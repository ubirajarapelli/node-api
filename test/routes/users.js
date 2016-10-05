// import jwt from "jwt-simple";
//
// describe("Routes: Tasks", () => {
//   const Users = app.db.models.Users;
//   const jwtSecret = app.libs.config.jwtSecret;
//   let token;
//   beforeEach(done => {
//     Users
//       .destroy({where: {}})
//       .then(() => Users.create({
//         name: "John",
//         email: "john@mail.net",
//         password: "12345"
//       }))
//       .then(user => {
//         token = jwt.encode({id: user.id}, jwtSecret);
//         done();
//       });
//   });
//   describe("GET /user", () => {
//     describe("status 200", () => {
//       it("Returns an authenticated user", done => {
//         request.get("/user")
//           .set("Authorization",`JWT ${token}`)
//           .expect(200)
//           .end((err, res)  =>  {
//             expect(res.body.name).to.eql("John");
//             expect(res.body.email).to.eql("john@mail.net");
//             done(err);
//           });
//       });
//     });
//   });
//   describe("DELETE /user", () => {
//     describe("status 200", () => {
//       it("Deletes an authenticated user", done => {
//         request.delete("/user")
//           .set("Authorization", `JWT ${token}`)
//           .expect(204)
//           .end((err, res) => done(err))
//       });
//     });
//   });
//   describe("POST /user", () => {
//     describe("status 200", () => {
//       it("Creates an new user", done => {
//         request.post("/users")
//           .send({
//             name: "Mary",
//             email: "mary@mail.net",
//             password: "12345"
//           })
//           .expect(200)
//           .end((err, res) => {
//             expect(res.body.name).to.eql("Mary");
//             expect(res.body.email).to.eql("mary@mail.net");
//             done(err);
//           });
//       });
//     });
//   });
// //});
// });
