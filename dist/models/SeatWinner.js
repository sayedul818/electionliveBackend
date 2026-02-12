import mongoose, { Schema } from "mongoose";
const SeatWinnerSchema = new Schema({
    seatId: { type: Number, required: true, unique: true, index: true },
    candidateId: { type: String, default: null },
    candidateName: { type: String, default: null },
    partyLabel: { type: String, default: null },
    votes: { type: Number, default: 0 },
}, { timestamps: true });
export const SeatWinnerModel = mongoose.model("SeatWinner", SeatWinnerSchema);
