import Footer from "./Footer"
import Navbar from "./Navbar"

import { Outlet } from "react-router-dom"


const Layout = ()=> {
    return (
     <>

     <Navbar/>
    
      <main>
        <Outlet />   {/* ✅ Yahin pe Home / About / Contact dikhenge */}
      </main>
   
     <Footer/>
     </>
    )
}

export default Layout