const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRouter = require("./routes/projectRoute");
const listRouter = require("./routes/listRoute");
const mailRoutes = require("./routes/mailRoute");
require("dotenv").config();

const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());

//DB connect
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB connection success"))
  .catch((err) => console.error("DB connection fail", err));

app.use("/api/projects", projectRouter);
app.use("/api/lists", listRouter);
app.use("/api", mailRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`backend server processing at port ${PORT}`);
});
