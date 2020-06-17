import Link from 'next/link'

const NavBar = ()=>{
    return(
        <div>
            <ul className="flex justify-center py-5 bg-blue-500"> 
               <Link href="/"><li><a className="mr-10 text-white"> Home </a></li></Link> 
               <Link href="/detailed"><li><a className="mr-10 text-white"> Detailed Prices </a></li></Link>
               <Link href="/about"><li><a className="mr-10 text-white"> About </a></li></Link>
               <Link href="/contact"><li><a className="text-white"> Contact </a></li></Link>
            </ul>
        </div>
    )
}

export default NavBar