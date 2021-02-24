module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      date_of_purchase: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return Book;
};
