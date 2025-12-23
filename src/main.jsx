import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductProvier } from './context/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvier>
      <App />
    </ProductProvier>
  </StrictMode>
);
