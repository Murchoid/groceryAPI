const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./config/connectToDb');

const app = express();

// Enable CORS for the specified origin
app.use(cors({
    origin: 'https://grocery-store-chi-seven.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/userRoute');
const itemRoutes = require('./routes/itemsRoute');

// Use routes
app.use('/api', userRoutes);
app.use('/api', itemRoutes);

// Connect to database
connectDb();

// Default response for root
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// Export the Express app as a module
module.exports = app;