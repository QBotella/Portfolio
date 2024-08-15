import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header/index.jsx'
import About_me from './Components/About_me/index.jsx'
import '../src/assets/styles/index.scss'
import Projets from './Components/Projets/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About_me />
    <Projets />
  </StrictMode>,
)
