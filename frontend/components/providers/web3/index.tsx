import { FunctionComponent, createContext, useEffect, useState } from "react";
import { Web3State, createDefaultState } from "./utils";
import { ethers } from "ethers";

export const Web3Context = createContext<Web3State>(createDefaultState())
const Web3Provider : FunctionComponent<any> = ({children})=>{
    const [web3Api,setweb3api] = useState<Web3State>(createDefaultState())
    const ethereum = typeof window !=='undefined'? window.ethereum : null
    const provider = ethereum? new ethers.BrowserProvider(ethereum) : null

    useEffect(()=>{
        setweb3api(()=>{
            return {
                ethereum : null,
                provider : null,
                contract : null,
                isLoading : false
            }
        })
    },[])
    return (
        <Web3Context.Provider value={web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useweb3(){
    return 
}

export default Web3Provider