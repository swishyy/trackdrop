const express = require("express");
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(express.json()); // REQ BODY
app.use(cors());

// ROUTES //
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/posts", require("./routes/post"));
app.use("/users", require("./routes/user"));


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
