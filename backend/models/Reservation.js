const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  dateTime: { type: Date, required: true }, // Updated to dateTime
  numberOfPeople: { type: Number, required: true },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
