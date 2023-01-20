const questionRouter = require('express').Router();

const { Question, Theme } = require('./db/models');

questionRouter.get('/', async (req, res) => {
  // const questions = await Question.findAll({ order: [["id", "ASC"]] });
  // res.json(questions);
  const themes = await Theme.findAll({ include: Theme.Questions });
  res.json(themes);
});

module.exports = questionRouter;
