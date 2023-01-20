const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      Theme.Questions = Theme.hasMany(Question, {
        foreignKey: 'themeId',
        as: 'questions',
      });
    }
  }
  Theme.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Theme',
      tableName: 'Themes',
    },
  );
  return Theme;
};
