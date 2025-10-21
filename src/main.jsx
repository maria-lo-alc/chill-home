import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
