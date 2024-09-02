import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TagManager from 'react-gtm-module'

const VITE_GTM_ID = import.meta.env.VITE_GTM_ID || ''; 
const tagManagerArgs = {
  gtmId: VITE_GTM_ID
}
TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
