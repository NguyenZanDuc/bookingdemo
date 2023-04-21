import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { NextUIProvider } from '@nextui-org/react';


export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >

        <Provider store={store}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </Provider>
    </SessionContextProvider>
  )
}
