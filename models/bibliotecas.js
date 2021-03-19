'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bibliotecas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bibliotecas.init({
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    meta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bibliotecas',
  });
  return Bibliotecas;
};