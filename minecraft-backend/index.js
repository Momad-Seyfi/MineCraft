// minecraft-backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const blockRoutes = require('./routes/blocks');

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use('/api/blocks', blockRoutes); // Set up routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
