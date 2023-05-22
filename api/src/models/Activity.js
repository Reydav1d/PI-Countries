const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name:{
            type: DataTypes.STRING,
            allowNull: false
        },

        difficulty:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        duration:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        season:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            timestamps: true
        });
};
