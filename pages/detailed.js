import {useState} from 'react'
import Layout from '../components/layout'
import { fetchData } from '../components/data'

const Detailed = ()=>{
    const [currency, setCurrency]= useState("USD")
    const [value, setValue] = useState("100")
    const [data, setData] = useState(null)

    const onClickHandler = async ()=>{
        const data = await fetchData(currency, value)
        setData(data)
  
    }


    return(
        <Layout>
            <h1> Bitcoin Converter </h1>
            <label for="currency"> Currency</label>
                <select class="text-black" name="currency" id="currency" onChange={e=> setCurrency(e.target.value)}>
                    <option value="USD"> USD </option>
                    <option value="GBP"> GBP </option>
                    <option value="EUR"> EUR </option>
                </select>
                <input type="number" value={value} onChange={e=> setValue(e.target.value)} className="text-black"/>
                <button onClick={()=>onClickHandler()}> Confirm </button>
                {data!==null && (
                <p> <span> {value} </span> <span> {currency} </span> can buy {data} Bitcoin</p>
                )}

        </Layout>
    )
}



export default Detailed