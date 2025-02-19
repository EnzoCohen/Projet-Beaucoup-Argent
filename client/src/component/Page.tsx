import { PropsWithChildren } from "react";
import { Footer } from "./Footer";

export const Page = ({children}:PropsWithChildren)=>{

    return(
       <> 
        <div className="w-full bg-indigo-50 h-full justify-center min-h-0 overflow-auto">
          {children}
        </div>
        <Footer></Footer>
        </>

    )
}