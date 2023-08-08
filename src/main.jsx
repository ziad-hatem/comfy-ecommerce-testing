import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart_context.jsx'
import { ProductsProvider } from './context/products_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/usercontext.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-nloa7qv3cz04rnpf.uk.auth0.com"
      clientId="YxxeNDXMIs0i9jlqXNDUWqQO6TCmD0kZ"
      redirect_uri={window.location.origin}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <QueryClientProvider client={queryClient}>
        <ProductsProvider>
      <CartProvider>
        <App />
    </CartProvider>
      </ProductsProvider>
        </QueryClientProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
