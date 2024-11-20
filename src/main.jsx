import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize'

import App from './App.jsx'
//  component mount >> unmount >> mount
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)
