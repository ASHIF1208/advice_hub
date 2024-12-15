import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Advice } from './Advice'
import './Advice.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Advice />
  </StrictMode>,
)
