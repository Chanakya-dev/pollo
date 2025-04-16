const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors()); // This will allow requests from all origins

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
