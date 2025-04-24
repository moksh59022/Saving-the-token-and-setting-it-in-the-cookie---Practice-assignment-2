// Import the jsonwebtoken package
const jwt = require('jsonwebtoken');

// Your secret key for signing JWT tokens (ensure to keep this safe)
const JWT_SECRET = '4e97abfb12bc58d4e28e72b5ab34778f';  // Replace with a secure secret key

// Function to create JWT token with expiry
const generateJWT = (payload) => {
  try {
    // Create JWT with an expiration time of 1 hour (expiresIn: '1h')
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    console.log('Generated JWT Token:', token);
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
  }
};

// Sample payload (this can be any object you want to encode in the JWT)
const payload = {
  username: 'john_doe',
  email: 'john@example.com',
};

// Generate JWT token
const token = generateJWT(payload);

// You can now use the generated token as needed