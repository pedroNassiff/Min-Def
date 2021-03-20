'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Noticias.init({
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    meta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Noticias',
  });
  return Noticias;
};