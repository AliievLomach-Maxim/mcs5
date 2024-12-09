import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize'

import App from './App.jsx'
import ToggleProvider from './context/ToggleProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </BrowserRouter>
  </StrictMode>
)
