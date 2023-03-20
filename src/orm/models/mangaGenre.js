'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manga_genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
 /*      Manga_genre.belongsTo( models.Manga, {
        foreignKey: 'id_manga'
      })
      Manga_genre.belongsTo(models.Literary_genre, {
        foreignKey: 'id_genre'
      }); */
    }
  }
  Manga_genre.init({
    id_manga: DataTypes.INTEGER,
    id_genre: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Manga_genre',
    timestamps: false
  });
  return Manga_genre;
};