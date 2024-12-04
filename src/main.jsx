import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize'

import App from './App.jsx'
import ToggleProvider from './context/ToggleProvider.jsx'
//  component mount >> unmount >> mount
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </StrictMode>
)
