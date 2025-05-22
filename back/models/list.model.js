const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
    required: false,
  },
  role: {
    type: [String],
    required: false,
  },
  s_description: {
    type: String,
    required: false,
  },
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("List", ListSchema);
