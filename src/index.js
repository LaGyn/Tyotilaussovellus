import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'

axios.get('http://localhost:3001/users').then(response => {
    const users = response.data
    console.log(users)
})



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
