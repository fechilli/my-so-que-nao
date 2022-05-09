'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable(
       'usuarios', 
       { 
         id:{
           type: sequelize.DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
         },

         nome:{
           type: sequelize.DataTypes.STRING(45),
          allowNull: false
         },

         email:{
          type: sequelize.DataTypes.STRING(45),
         allowNull: false
        },
        senha:{
          type: sequelize.DataTypes.STRING(65),
         allowNull: false
        },
        nome:{
          type: sequelize.DataTypes.STRING(45),
         allowNull: true
        }

         
      
      
      
      }
       );
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('usuarios');
  }
};
