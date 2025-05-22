const Project = require("../models/project.model");

//Create project

const createProject = async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      // 여러 개 한 번에 저장
      const savedProjects = await Project.insertMany(req.body);
      res.status(201).json(savedProjects);
    } else {
      // 하나만 저장
      const newProject = new Project(req.body);
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Bring sepecific project
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProject,
  getProjectById,
};
