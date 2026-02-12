import mongoose, { Schema } from "mongoose";
const CandidateSchema = new Schema({
    name: { type: String, required: true },
    partyId: { type: String },
    partyLabel: { type: String },
    seatId: { type: Number, required: true, index: true },
    symbol: { type: String },
    symbolLabel: { type: String },
    symbolImageUrl: { type: String },
    imageUrl: { type: String },
    votes: { type: Number, default: 0 },
}, { timestamps: true });
export const CandidateModel = mongoose.model("Candidate", CandidateSchema);
