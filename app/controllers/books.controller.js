const Bookervice = require('../services/book.service');

exports.create = (req, reply) => {
  const attributes = req.body.flow;
  Bookervice.create(attributes)
    .then((flow) => {
      reply.code(201).send(flow);
    })
    .catch((error) => {
      reply.send(error);
    });
};
