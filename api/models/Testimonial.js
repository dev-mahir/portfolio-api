import mongoose from "mongoose";

const testimonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    designation: {
      type: String,
    },
    rating: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
    },
  },

  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Testimonial", testimonialSchema);
