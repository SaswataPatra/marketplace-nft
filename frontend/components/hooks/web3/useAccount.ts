import { CryptoHookFactory } from "@/types/hook"
import useSWR, { SWRConfiguration } from "swr"

export type UseAccountResponse = {
    isLoading : boolean
}
const config:SWRConfiguration ={
    revalidateOnFocus : false
}
type AccountHookFactory = CryptoHookFactory<string,UseAccountResponse>
export type UseAccountHook = ReturnType<AccountHookFactory>
export const hookFactory : AccountHookFactory =({provider}) => (params) =>{
    const swrRes = useSWR(provider?"hooks/web3/useAccount":null,()=>{
        console.log(params)
        console.log(provider)
        return "Test user"
    },config)
    return swrRes
}

export const useAccount = ()=>{hookFactory({ethereum : undefined, provider : undefined})}