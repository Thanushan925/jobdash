// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

// CSS Styling
import './index.css'

// Components
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)
