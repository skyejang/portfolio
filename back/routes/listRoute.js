const express = require("express");
const router = express.Router();
const {
  createList,
  getAllList,
  getListWithProject,
} = require("../controllers/listController");

router.post("/", createList);
router.get("/", getAllList);
router.get("/:id", getListWithProject);

module.exports = router;
