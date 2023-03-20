'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.belongsToMany( models.Manga, { through: models.Manga_author, foreignKey: "id_author" } )
    }
  }
  Author.init({
    author_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
    timestamps: false
  });
  return Author;
};
