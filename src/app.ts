import express from "express";
const app = express();
const port = process.env.port ?? 8000;
import db from "./domain/models/index";
require("./domain/schemas/user/User");

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

// invalid url handling
app.get("*", (_, res) => {
  res.status(404).send("Invalid Endpoint");
});

process.on("uncaughtException", (error, origin) => {
  console.log("----- Uncaught exception -----");
  console.log(error);
  console.log("----- Exception origin -----");
  console.log(origin);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("----- Unhandled Rejection at -----");
  console.log(promise);
  console.log("----- Reason -----");
  console.log(reason);
  process.exit(1);
});

db.sequelize
  .sync()
  .then(() => {
    console.log(`
      
        ${process.env.NODE_ENV} database running... on ${process.env.dbHost}
      
      `);
    app.listen(port, () => {
      console.log(`
        Server is running on http://localhost:${port}
      
      `);
    });
  })
  .catch((err: any) => console.log(err));
