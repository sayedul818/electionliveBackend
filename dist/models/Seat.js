import mongoose, { Schema } from "mongoose";
const SeatSchema = new Schema({
    seatId: { type: Number, required: true, unique: true, index: true },
    name: { type: String, required: true },
    divisionId: { type: String },
    districtId: { type: String },
    totalVoters: { type: Number },
}, { timestamps: true });
export const SeatModel = mongoose.model("Seat", SeatSchema);
