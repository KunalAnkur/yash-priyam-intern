const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const listSchema = new Schema(
  {
    listName: {
      type: String,
    },
    cardList: [{ type: ObjectId , ref: "Card"}],
    createdBy: {type:ObjectId, ref: "User"}
  },
  { timestamps: true }
);
module.exports = List = mongoose.model("List", listSchema);
