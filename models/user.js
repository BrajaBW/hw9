'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    photo : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};