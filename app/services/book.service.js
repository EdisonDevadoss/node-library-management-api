const { Book } = require('../models');

function create(attributes) {
  return Book.create(attributes);
}

module.exports = { create };
