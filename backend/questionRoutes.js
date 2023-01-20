const questionRouter = require("express").Router();

const { Question } = require("./db/models");

questionRouter.get("/", async (req, res) => {
  const questions = await Question.findAll({ order: [["id", "ASC"]] });
  res.json(questions);
});

module.exports = questionRouter;
