import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: "post" }],
  },
  { versionKey: false }
);

const User = mongoose.model("user", UserSchema);

export default User;
