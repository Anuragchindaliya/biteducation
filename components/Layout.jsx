import React from 'react'
import Footer from './common/Footer'
import Header from './common/Header'


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="site-wrap">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout