const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    starttime: { type: String, required: true, allowNull: false},
    date: { type: Date, required: true, allowNull: false},
   
    bookedByUser: { type: Schema.Types.ObjectId,ref: 'user'}
}, {timestamps: true});

module.exports = mongoose.model("booking", BookingSchema);