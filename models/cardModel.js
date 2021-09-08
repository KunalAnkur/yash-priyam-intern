const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
const cardSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    listRef: {
        type:ObjectId,
        ref: "List"
    }
  },
  { timestamps: true }
);
module.exports = Card = mongoose.model("Card", cardSchema);
