const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {   //id
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {   //nombre
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {    //resumen
      type: DataTypes.STRING,
      allowNull: false
    },
    health_Score: {   //Nivel de comida saludable
      type: DataTypes.INTEGER,
    },
    instructions: {   //Paso a paso
      type: DataTypes.TEXT
    },
    image: {          //imagen
      type: DataTypes.STRING
    },
    diets: {
      type: DataTypes.STRING,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};