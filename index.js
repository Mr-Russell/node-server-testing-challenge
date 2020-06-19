const server = require('./api/server.js');

server.use(express.json());

const port = process.env.PORT || 2814;
server.listen(port, ()=> console.log(`\n Server Running on Port ${port} \n`))