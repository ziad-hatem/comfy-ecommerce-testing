import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart_context.jsx'
import { ProductsProvider } from './context/products_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/usercontext.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FilterProvider } from './context/filter_Context.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
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
        <FilterProvider>
              <App />
        </FilterProvider>
    </CartProvider>
      </ProductsProvider>
        </QueryClientProvider>
      </UserProvider>
    </Auth0Provider>
)
