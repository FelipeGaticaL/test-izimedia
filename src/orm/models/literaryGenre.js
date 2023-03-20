'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Literary_genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
/*       Literary_genre.hasMany( models.Manga_genre, {
        as: 'id_genre',
        foreignKey: 'id_genre'
      }) */
      Literary_genre.belongsToMany( models.Manga, { through: models.Manga_genre, foreignKey: "id_genre" } )
    }
  }
  Literary_genre.init({
    genre_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Literary_genre',
    timestamps: false
  });
  return Literary_genre;
};