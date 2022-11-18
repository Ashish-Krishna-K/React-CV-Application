import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <h1>CV GENERATOR</h1>
    </header>
    <main>
      <App />
    </main>
    <footer>
      <h2>Project by Ashish-Krishna-K</h2>
    </footer>
  </React.StrictMode>
);
