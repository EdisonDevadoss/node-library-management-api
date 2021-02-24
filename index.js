const detenv = require('dotenv');

detenv.config({ path: './.env' });
const build = require('./application');

const db = require('./app/models');

const PORT = process.env.PORT || 3000;

const fastify = build();

const start = async () => {
  try {
    await db.sequelize.authenticate();
    await fastify.listen(PORT, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
