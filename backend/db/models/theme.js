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
      title: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Theme',
      tableName: 'Themes',
    },
  );
  return Theme;
};
