const mongoose = require("mongoose");
const Booking = mongoose.model("booking");

module.exports = (app) => {


  app.post(`/create/booking`, async (req, res) => {
    try {
      const makeBooking = new Booking({
        starttime: req.body.starttime,
        date: req.body.date,
      });
      await makeBooking.save();
      console.log("new booking made:", makeBooking);
      return res.send(makeBooking);
    } catch (error) {
      console.log("hey there's an err", error);
      return res.send(error);
    }
  });
};