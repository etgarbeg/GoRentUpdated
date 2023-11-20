require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5500;


const server = express();

server.use(cors());
server.use(express.json({ limit: '1000mb' }));
server.use('/api/users', require('./routes/userRoute'))

// Express Server

server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);

});

