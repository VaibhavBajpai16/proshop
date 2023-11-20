import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// dotenv.config();
// import { log } from "console";
const dotenv = require("dotenv").config();
import connectDB from "./congig/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { dirname } from "path";

// dotenv
console.log(dotenv);
const path = require("path");
const __dirname = path.resolve();

const port = process.env.PORT || 5006;
console.log(port);
connectDB();

const app = express();

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.use("/api/product", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(path.join(__dirname, "/my-app/build")));
  //any route that is not api will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "my-app", "build", " index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
