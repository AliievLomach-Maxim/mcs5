import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize'

import App from './App.jsx'
import ToggleProvider from './context/ToggleProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToggleProvider>
          <App />
        </ToggleProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
