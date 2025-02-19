import { PropsWithChildren } from "react";
import { Footer } from "./Footer";

export const Page = ({children}:PropsWithChildren)=>{

    return(
       <> 
        <div className="min-w-96 min-h-screen bg-indigo-50 flex justify-center  mt-3">
          {children}
        </div>
        <Footer></Footer>
        </>

    )
}