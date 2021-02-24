module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('books', {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: true
    },
    date_of_purchase: {
      type: Sequelize.DATE,
      allowNull: true
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('books')
};
