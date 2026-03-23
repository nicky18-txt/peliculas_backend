'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.genero, {foreignKey: 'generoId'});
      this.hasMany(models.rating, {foreignKey: 'peliculaId'});
      // define association here
    }
  }
  pelicula.init({
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    published_year: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pelicula',
  });
  return pelicula;
};