'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rating.belongsTo(models.pelicula,{foreignKey: 'peliculaId'});
      // define association here
    }
  }
  rating.init({
    autor: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rating',
  });
  return rating;
};