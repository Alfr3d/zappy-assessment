import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar/>
    </header>
    <section className='p-8 justify-center h-screen flex'>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Inserisci il nome e la tua email per proseguire.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {children}
          </div>
        </div>
      </div>

    </section>
  </div>
)

export default Layout
