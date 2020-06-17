export const fetchData = async function getServerSideProps(cur, value) {
    const res =  await fetch(`https://blockchain.info/tobtc?currency=${cur}&value=${value}`)
    const data = await res.json()
    console.log(data)
    return data
  }
