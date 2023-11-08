import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import MyProvider from './providers/MyProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <HelmetProvider>
        <RouterProvider router={routes}></RouterProvider>
      </HelmetProvider>
    </MyProvider>
  </React.StrictMode>,
)
