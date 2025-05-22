const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  description: {
    type: [String],
    required: true,
  },
  stack: {
    type: [String],
    required: true,
  },
  work_type: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },
  contribution: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
