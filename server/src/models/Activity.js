const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        /* 
        ID. *
        Nombre. *
        Dificultad (número del 1 al 5). *
        Duración (en horas).
        Temporada (Verano, Otoño, Invierno o Primavera). 
        */
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
            type:DataTypes.ENUM('1','2','3','4','5'),
            allowNull:false,
        },
        duration:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
        season:{
            type:DataTypes.ENUM('Summer','Autumn','Winter','Spring'),
            allowNull:false
        }

    })
}