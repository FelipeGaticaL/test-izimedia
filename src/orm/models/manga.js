'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  /*     Manga.hasMany( models.Loan, {
        as: 'manga_id',
        foreignKey: 'manga_id'
      }) */
   /*    Manga.hasOne( models.Manga_author, {
        as: 'id_manga',
        foreignKey: 'id_manga'
      }) */
      Manga.belongsToMany( models.Literary_genre, { through: models.Manga_genre, foreignKey: "id_manga" } )
      Manga.belongsToMany( models.Author, { through: models.Manga_author, foreignKey: "id_manga" } )
   }
  }
  Manga.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Manga',
  });
  return Manga;
};