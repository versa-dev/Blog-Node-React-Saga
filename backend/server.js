const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/users", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

app.get("/comments", async (req, res, next) => {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        user: true,
      },
    });
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

app.post("/comments", async (req, res, next) => {
  try {
    const { user_id, content } = req.body;

    if (!user_id || !content) res.sendStatus(400);

    const comment = await prisma.comment.create({
      data: {
        content,
        user: {
          connect: {
            id: user_id,
          },
        },
      },
    });
    res.json(comment).status(204);
  } catch (err) {
    if (err.code === "P2016") {
      res.sendStatus(400);
    } else {
      next(err);
    }
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.toString() });
});

app.listen(3001, () => {
  console.log(`Server ready at http://localhost:3001`);
});
