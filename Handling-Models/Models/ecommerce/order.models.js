import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
	{
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		qantity: {
			type: Number,
			default: 1,
			requied: true,
		},
	},
	{ timestamps: true }
);

const orderSchema = new mongoose.Schema(
	{
		orderId: {
			type: String,
			requied: true,
			unique: true,
		},
		orderPrice: {
			type: Number,
			requied: true,
			default: 0,
		},
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		orderItems: {
			type: [orderItemSchema],
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["PENDING", "SHIPPED", "DELIVERED", "CANCELLED"],
			default: "PENDING",
		},
	},
	{ timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
