const build = require('./application');

const PORT = process.env.PORT || 3000;


const fastify = build();

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0');
  } catch (err) {
    console.log('error', err)
    fastify.log.error(err);
    process.exit(1);
  }
};
start();