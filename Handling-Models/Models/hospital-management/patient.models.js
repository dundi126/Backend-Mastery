import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		diagnosedWith: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		bloodGroup: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			enum: ["Male", "Female", "Other"],
			required: true,
		},
		admitedIn: {
			type: mongoose.Schema.Types.objectId,
			ref: "Hospital",
			required: true,
		},
		admittedAt: {
			type: Date,
			required: true,
		},
		dischargedAt: {
			type: Date,
		},
	},
	{ timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
