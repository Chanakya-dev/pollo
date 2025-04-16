import React, { useEffect, useState } from 'react';

const BACKEND_URL = "https://pollo-pba7.onrender.com"; // Replace with your Render backend URL after deployment

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default App;
