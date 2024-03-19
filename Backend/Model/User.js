const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
    },
    Email: {
      type: String,
    },
    Password: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
