const fastify = require('fastify');
const fastifyCors = require('fastify-cors');

const app = fastify();
const bookRoutes = require('./app/routes/book.routes');

function build() {
  app.register(fastifyCors, {
    origin: '*',
    methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  });
  app.get('/', (req, res) => {
    res.send({ hello: 'world' });
  });
  app.register(bookRoutes, { prefix: '/v1' });
  return app;
}
module.exports = build;
