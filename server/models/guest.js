const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
  guestname: String,
  kerberos: {type: String, default: ""},
  hostname: String,
});

// compile model from schema
module.exports = mongoose.model("guest", GuestSchema);