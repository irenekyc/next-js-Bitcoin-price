import Layout from '../components/layout'
import Link from 'next/link'

const Index = (props)=>{
    return (
        <Layout>
             <div>
                <h1 className="text-white font-bold text-2xl"> Checkout below Bitcoin price</h1>
                <ul className="text-white">
                    <li> USD: {props.data.bpi.USD.rate} </li>
                    <li> GBP: {props.data.bpi.GBP.rate} </li>
                    <li> EUR: {props.data.bpi.EUR.rate} </li>
                </ul>
                <Link href="/detailed"><a> More </a></Link>
             </div>
        </Layout>
     
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()
    return {
      props: {
        data
      },
    }
  }
  
export default Index