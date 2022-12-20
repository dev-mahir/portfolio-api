import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instragram: {
      type: String,
    },
    github: {
      type: String,
    },
  },

  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Contact", contactSchema);
