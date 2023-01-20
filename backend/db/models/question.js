const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      Question.Theme = Question.belongsTo(Theme, {
        foreignKey: 'themeId',
        as: 'theme',
      });
    }
  }
  
  Question.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
      tableName: 'Questions',
    },
  );
  return Question;
};
