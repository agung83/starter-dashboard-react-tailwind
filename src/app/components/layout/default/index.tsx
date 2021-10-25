import { Fragment, useEffect } from 'react'
import Navbar from '../navbar/lazlyload'
import Sidebar from '../sidebar/lazyload'
import Footer from '../footer/lazyload'

type DefaultLayoutType = {
    children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: DefaultLayoutType) => {
    let theme = localStorage.getItem('theme');

    useEffect(() => {
        let html = (document.querySelector('html') as any)
        html.setAttribute('class', theme)
    }, [theme])

    return (
        <Fragment>
            <div className="mx-auto bg-grey-400">
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex flex-1">
                        <Sidebar />
                        <main className="bg-white-300  overflow-hidden" />
                        <div className="container py-5 px-3">
                            {children}
                        </div>
                        <main />
                    </div>
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}
