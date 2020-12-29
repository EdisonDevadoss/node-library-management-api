const fastify = require('fastify');

const app = fastify();

app.get('/', (req, res)=>{
  res.send({hello: 'world'});
})

app.listen(3000)