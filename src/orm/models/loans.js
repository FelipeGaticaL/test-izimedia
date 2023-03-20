'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loan.belongsTo(models.Profile, {
        foreignKey: 'profile_id'
      });
      Loan.belongsTo(models.Manga, {
        foreignKey: 'manga_id'
      });
    }
  }
  Loan.init({
    manga_id: DataTypes.INTEGER,
    profile_id: DataTypes.INTEGER,
    loan_date: DataTypes.DATEONLY,
    return_date: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    quantity_loan: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Loan',
  });
  return Loan;
};