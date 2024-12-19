const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const cors = require('cors');
require('dotenv').config();  // This loads environment variables from the .env file

const jwt = require('jsonwebtoken');

// Access your JWT secret from the environment variable
const JWT_SECRET = process.env.JWT_SECRET;

// Example function to sign a JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '2h' });
  return token;
};

// Example usage
const token = generateToken('12345');
console.log(token);


const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests only from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'FETCH'], // Specify allowed HTTP methods
  }));
// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});


// app.post('api/admin/signup'), (req, res) => {
//   console.log('Request new admin:', req.body);
//   const {email, newPassword, name} = req.body

//   res.status(401).json({ message: 'Invalid credentials' }); // 401 for invalid credentials

// }


app.post('/api/admin/login', (req, res) => {
    console.log("Request body:", req.body); // Log the received data
    const { username, password } = req.body;
    
    // Example logic for authentication
    if (username === 'admin' && password === 'password123') {
       // Generate a token using JWT or return a success response
    const token = jwt.sign({ username }, 'yourSecretKey', { expiresIn: '1h' });
    return res.status(200).json({ token, message: 'Login successful', username: username,  });
  
    }
    
    res.status(401).json({ message: 'Invalid credentials' }); // 401 for invalid credentials
  });
// Other routes can go here...

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

