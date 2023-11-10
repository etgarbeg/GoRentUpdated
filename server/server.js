require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = 5500 || process.env.PORT;


const server = express();

server.use(cors());
server.use(express.json({ limit: '1000mb' }));
server.use('/api/users', require('./routes/userRoute'))

// Express Server

server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);

});

