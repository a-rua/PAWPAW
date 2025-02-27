import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { AppMain } from './AppMain.jsx'

createRoot(document.getElementById('root')).render(
    <AppMain />
)
