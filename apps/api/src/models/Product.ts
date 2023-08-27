import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "Please add product name"],
  },

  one_liner: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: [true, "Please add product price"],
  },

  quantity: {
    type: String,
    required: [true, "Please add product quantity"],
  },

  section_name: {
    type: String,
    enum: [
      "VALUE_DEALS",
      "KID_FRIENDLY",
      "MILLET_ALTERNATIVES",
      "SPICY_CUISINE",
      "REGIONAL_FAVORITES",
      "FARM_TO_TABLE",
    ],
    required: [true, "Please add products section name"],
  },

  product_images: {
    type: Array,
    required: [true, "Please add products section name"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ProductModel = mongoose.model("Product", ProductSchema);
