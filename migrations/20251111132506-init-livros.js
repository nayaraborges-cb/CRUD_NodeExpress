'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano_publicacao: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      resumo: {
        type: Sequelize.TEXT,
        allowNull: true
      }
      
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('livros');
  }
};
