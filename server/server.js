const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// const Route = require('./routes/routes');
// server.use('/', Route);

const port = process.env.PORT || 3000;

server.get('/', (req, res) => res.send('Server Running'))
server.listen(port, () => console.log(`App listening on http://localhost:${port}/`))