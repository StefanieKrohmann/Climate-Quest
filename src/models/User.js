import mongoose, { Schema } from "mongoose";

const user = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel =
  mongoose.models.UserModel || mongoose.model("UserModel", user, "Users");
export default UserModel;
