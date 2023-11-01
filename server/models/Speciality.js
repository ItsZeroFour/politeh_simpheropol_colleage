import mongoose from "mongoose";

const specialitySchema = new mongoose.Schema(
  {
    specialityCode: {
      type: String,
      unique: true,
      required: true,
    },

    specialityTitle: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },

    cvalification: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SpecialityModel", specialitySchema);
