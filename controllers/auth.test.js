// /*
// 1. отримує масив { email, password, subscription}
// 2. повертає масив { email, subscription }
// 3. если не валідний фргумент то помилка з повідомленням

// Тестові данні:
// 1.
// {"email":"ania12345@gmail.com",
// "password": "ania12345",
// "subscription":"starter"
// }
// повернеться
// {"email":"ania12345@gmail.com",
// "subscription":"starter"
// }
// status 200

// 2.
// {
// "password": "ania987",
// "email":"ania987@gmail.com",
// "subscription":"business",
// }
// 409, "Email in use"
// */

// // const { describe } = require("yargs");
// const request = require("supertest");
// const bcrypt = require("bcrypt");
// const {app} = require("../app");
// const { signup } = require("./auth");
// const { User } = require("../models/user");
// const mongoose = require("mongoose");
//   const { DB_HOST } = process.env;

// require("dotenv").config();
// const { describe, beforeAll, afterAll, it, expect } = require("@jest/globals");
// // console.log(ctrl.signup);

// describe("POST /login", () => {

//   let user;
//   let server;

//   beforeAll(async () => {
//       await mongoose.connect(DB_HOST);
//     server = app.listen(3000);
//     const password = await bcrypt.hash("password123", 10);
//     user = await User.create({
//       email: "test@example.com",
//       password,
//       subscription: "starter",
//     });
//     console.log("beforeAll11111111111111",user);
//   });
//   afterAll(async () => {
//     await User.findByIdAndRemove(user._id);
//     await mongoose.disconnect();
//     await server.close();
//     console.log("Disconnected from MongoDB");
//   });

//   it("should return a 200 status code and a token and user object", async () => {
//     await request(app)
//       .post("/api/users/login")
//       .send({ email: "test@example.com", password: "password123" })
//       .expect(200);
//     expect(user).toBeTruthy();
//     expect(typeof user).toBe("object");
//     expect(user.email).toBeTruthy();
//     expect(typeof user.email).toBe("string");
//     expect(user.subscription).toBeTruthy();
//     expect(typeof user.subscription).toBe("string");
//     expect(user.token).toBeDefined();

//   });

//   it("should return a 401 status code when the email is wrong", async () => {
//     await request(app)
//       .post("/api/users/login")
//       .send({ email: "wrong@example.com", password: "password123" })
//       .expect(401);
//   });

//   it("should return a 401 status code when the password is wrong", async () => {
//     await request(app)
//       .post("/api/users/login")
//       .send({ email: "test@example.com", password: "wrongpassword" })
//       .expect(401);
//   });
// });

// // describe("test signup", () => {

// //   test("status 200 ", async () => {

// //     const mReq = {
// //       body: {
// //         email: "ania12345@gmail.com",
// //         password: "ania12345",
// //         subscription: "starter",
// //       },
// //     };
// //     const mRes = {
// //       email: mReq.body.email,
// //       subscription: mReq.body.subscription,
// //     };

// //     const user = {
// //       _id: "_id",
// //       email: "ania12345@gmail.com",
// //       password: "ania12345",
// //       subscription: "starter",
// //       token: "token",
// //       avatarURL: "avatarURL",
// //     };
// //   jest.spyOn(User, "findOne").mockImpLemetationOnce(() => {user});

// //     const result = await signup(mReq, mRes);
// //     expect(result.email).toEqual(mReq.email);

// //     // console.log("result11111", result);
// //     // expect(result).toEqual({
// //     //   email: "ania12345@gmail.com",
// //     //   subscription: "starter",
// //     // });
// //   })
// // })

// //   //   test("status 200 ", () => {
// //   //     const result = ctrl.signup({
// //   //       "email": "ania12345@gmail.com",
// //   //       "password": "ania12345",
// //   //       "subscription": "starter",
// //   //     });
// //   //     expect(result).toEqual({
// //   //       "email": "ania12345@gmail.com",
// //   //       "subscription": "starter",
// //   //     });
// //   // });
