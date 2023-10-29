import mongoose, { Schema } from "mongoose";

const userQuest = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    quest: [
      {
        title: String,
        icon: String,
        desc: String,
        steps: Number,
        uuid: String,
      },
    ],
  },
  { timestamps: true }
);

const UserQuest =
  mongoose.models.UserQuest ||
  mongoose.model("UserQuest", userQuest, "UserQuest");

export default UserQuest;
