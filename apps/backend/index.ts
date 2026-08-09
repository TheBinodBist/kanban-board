import express from "express";
import { prisma } from "./db";

const app = express();
app.use(express.json());

app.post("/signup", async(req, res) => {
  const { username, password } = req.body;
  await prisma.user.create({
    data:{
      username,
      password
    }
  })
  res.json({
    message: "Signed up",
  });
});

app.listen(4000);
