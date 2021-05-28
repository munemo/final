
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(cors());


require("./models/Booking.model");

mongoose
  .connect(
    process.env.PROD_DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//const warning = require("./middlewares/Middlewares")

require("./routes/Booking.route.js")(app);

const PORT = process.env.PORT || 3001;

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
 response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})