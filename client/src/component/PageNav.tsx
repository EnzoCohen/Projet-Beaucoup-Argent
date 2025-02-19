import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar"
import { Footer } from "./Footer";

export const PageNav = ({children}:PropsWithChildren)=>{

    return(
       <> 
        <Navbar></Navbar>
        <div className="min-w-96 min-h-screen bg-indigo-50 flex justify-center  mt-3">
          {children}
        </div>
        <Footer></Footer>
        </>

    )
}