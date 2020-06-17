import Head from 'next/head'
import NavBar from './NavBar'


const Layout = (props)=>{
    return(
        <div>
            <Head>
                <title> BitcoinZ</title>
            </Head>
            <div>
                <NavBar />
            </div>
            <div className="bg-blue-500 text-white">
                <div className="container">
                    {props.children}
                </div>
            </div>
         
        </div>
    )
}

export default Layout