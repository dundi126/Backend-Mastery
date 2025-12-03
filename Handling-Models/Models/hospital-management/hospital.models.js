import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		address1: {
			type: String,
			required: true,
		},
		address2: {
			type: String,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		zipCode: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		specicializedIn: {
			type: [String],
		},
	},
	{ timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
