'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE' 
      });
      Profile.hasMany( models.Loan, {
        as: 'profile_id',
        foreignKey: 'profile_id'
      })
    }
  }
  Profile.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    addres: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    age: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};