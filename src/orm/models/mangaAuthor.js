'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manga_author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
 /*      Manga_author.belongsTo(models.Manga, {
        foreignKey: 'id_manga_author'
      });
      Manga_author.belongsTo(models.Author, {
        foreignKey: 'id_author'
      }); */
    }
  }
  Manga_author.init({
    id_manga: DataTypes.INTEGER,
    id_author: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Manga_author',
    timestamps: false
  });
  return Manga_author;
};