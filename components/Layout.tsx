import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'

interface Layout {
    children: React.ReactNode;
 }

const Layout = ({ children }: Layout) => {

    const title = "Tracker Crypto Api Test"
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="header" > 
                <Link href='/'passHref >
                <a>
                    Tracker crypto API
                </a>
                </Link>
            </header>

            <main>{children}</main>
        </div>
    )
}

export default Layout;