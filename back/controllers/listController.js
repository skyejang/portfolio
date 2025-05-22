const List = require("../models/list.model");

// Create List
const createList = async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      // 여러 개 한 번에 저장
      const savedLists = await List.insertMany(req.body);
      res.status(201).json(savedLists);
    } else {
      const newList = new List(req.body);
      const savedList = await newList.save();
      res.status(201).json(savedList);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Get the all list
const getAllList = async (req, res) => {
  try {
    const lists = await List.find().populate("project_id");
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// List + Search connected project(populate)
const getListWithProject = async (req, res) => {
  try {
    const list = await List.findOne({ project_id: req.params.id }).populate(
      "project_id"
    );
    if (!list) return res.status(404).json({ message: "List not found" });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createList,
  getAllList,
  getListWithProject,
};
