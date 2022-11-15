import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>CV GENERATOR</header>
    <main>
      <App />
    </main>
    <footer>Project by Ashish-Krishna-K</footer>
  </React.StrictMode>
);
