const booksController = require('../controllers/books.controller');

function books(fastify, opts, next) {
  fastify.post('/books', booksController.create);

  next();
}
module.exports = books;
