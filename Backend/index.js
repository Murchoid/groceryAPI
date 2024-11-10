const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./config/connectToDb');

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors({
    origin: 'https://grocery-store-chi-seven.vercel.app', // Change this to specific origins in production for better security
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

// Start the server
app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});