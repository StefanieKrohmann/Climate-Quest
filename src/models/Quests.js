import mongoose, { Schema } from "mongoose";

const quest = new Schema(
  {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    desc: {
      type: String,
    },
    steps: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Quest = mongoose.models.Quest || mongoose.model("Quest", quest, "Quest");

export default Quest;
