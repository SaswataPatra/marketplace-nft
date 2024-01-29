import { Web3Dependencies } from "@/types/hook";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
    interface Window{
      ethereum?:MetaMaskInpageProvider
    }
  }
  
type Nullable<T> = {
    [P in keyof T] : T[P] | null
}
export type Web3State ={
    isLoading : boolean
}& Nullable<Web3Dependencies>

export const createDefaultState = () =>{
    return {
        ethereum : null,
        provider : null,
        contract : null,
        isLoading : true
    }
}