import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize'

import App from './App.jsx'
import ToggleProvider from './context/ToggleProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToggleProvider>
            <App />
          </ToggleProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
