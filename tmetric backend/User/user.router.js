const express = require("express");
const userModel = require("./user.model");

const app = express.Router();

// app.post("/signup", async(req, res)=>{
//     // let { email } = req.body;
//     console.log(req.body)
//     let createdUser =  userModel(req.body);
//        await createdUser.save()
//     // console.log(createdUser);
//     res.send(createdUser);
// })

app.get("/", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email, password });
    console.log("user is", user);
    if (!user) {
      // feedback: fw17_1126 - You don't need return statement, res automatically returns the flow
      return res
        .status(500)
        .send({ error_messege: "enter correct email or password" });
    }
   // feedback: fw17_1126 - Never send plain text in token, always use encoded token. Use lib like: bcrypt.js
    res.send({
      token: `${user.name}`,
    });
    console.log("token is", token);
  } catch (err) {
    res.status(500).send(err.messege);
  }
});

app.post("/signup", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(404).send({ error_messege: "email already exist" });
    }

    let createdUser = await userModel.create(req.body);
    res.send({ userKey: createdUser });
  } catch (err) {
    // feedback: fw17_1126 - Send meaningful response to the user, it should include what went wrong, anything missing, any errors on server and etc.
    res.status(500).send(err.messege);
  }
});

module.exports = app;
