import { PropsWithChildren } from "react";

export const Page = ({children}:PropsWithChildren)=>{

    return(
       <> 
        <div className="w-full h-full justify-center min-h-0 overflow-auto">
          {children}
        </div>
       </>
    )
}