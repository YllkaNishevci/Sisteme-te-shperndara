const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRouter = require("./routes/tasks");
const app = express();

app.use(cors());
app.use(bodyParser.json());
//me permiresu connection me db ne atl
mongoose
  .connect("mongodb://localhost:27017/task-manager")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Routes
app.use("/tasks", taskRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
