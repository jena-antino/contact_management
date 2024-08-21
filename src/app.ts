import express from "express";
const app = express();
const port = process.env.port ?? 8000;
import db from "./domain/models/index";

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

db.sequelize
  .sync()
  .then(() => {
    console.log(`${process.env.NODE_ENV} database running... on ${process.env.dbHost}`);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err: any) => console.log(err));
