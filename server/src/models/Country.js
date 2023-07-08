const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type:DataTypes.STRING(3),
      primaryKey:true,
      allowNull:false,
      unique:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    flagImg:{
      type:DataTypes.STRING,
      validate:{
        isUrl:true,
      },
      allowNull:false
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type:DataTypes.STRING,
    },
    area:{
      type:DataTypes.INTEGER,
    },
    population:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  },{timestamps:false})};