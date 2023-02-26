const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_Score: {
      type: DataTypes.INTEGER,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT
    },
    time: {
      type: DataTypes.INTEGER,
    },
    cuisines: {
      type: DataTypes.STRING,
    },
    servings: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.STRING,
    },
    
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};