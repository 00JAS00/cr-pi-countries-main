const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unique:true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty:{
            type:DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            }
        },
        duration:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        season:{
            type:DataTypes.ENUM('summer','autumn','winter','spring'),
            allowNull:false
        }

    })
}