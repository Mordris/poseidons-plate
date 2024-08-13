const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

// Create a new reservation
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, dateTime, numberOfPeople } = req.body;

    const reservationDateTime = new Date(dateTime);

    // Define the time window for checking availability
    const startTime = new Date(reservationDateTime.getTime() - 30 * 60 * 1000); // 30 minutes before
    const endTime = new Date(reservationDateTime.getTime() + 30 * 60 * 1000); // 30 minutes after

    // Check if the time slot is available
    const reservations = await Reservation.find({
      dateTime: {
        $gte: startTime.toISOString(),
        $lte: endTime.toISOString(),
      },
    });

    if (reservations.length >= 20) {
      return res.status(400).json({
        message: "We're so busy at that time. Please select another time.",
      });
    }

    const reservation = new Reservation({
      name,
      phone,
      email,
      dateTime, // Store full date-time
      numberOfPeople,
    });

    await reservation.save();
    res.status(201).json({ message: "Reservation created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

// Get all reservations
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

module.exports = router;
