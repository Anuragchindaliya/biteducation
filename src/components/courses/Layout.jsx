import React from 'react'
import InterLinking from '../common/InterLinking'

const Layout = (Comp) => {
    return () => (
        <>
            <Comp />
            <InterLinking />
        </>
    )
}

export default Layout