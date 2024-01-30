import { MetaMaskInpageProvider } from "@metamask/providers"
import { Contract } from "ethers"
import { BrowserProvider } from "ethers"
import { SWRResponse } from "swr"


export type Web3Dependencies = {
    ethereum : MetaMaskInpageProvider,
    provider : BrowserProvider |null,
    contract : Contract,
    isLoading : boolean
}

export type CryptoHookFactory<D=any,R=any,P=any> = {
    (D:Partial<Web3Dependencies>) : CryptoHandlerHook<D,R,P>
}

export type CryptoHandlerHook<D=any,R=any,P=any> = (params? : P) => CryptoSWResponse<D,R>

export type CryptoSWResponse<D=any,R=any> = SWRResponse<D>&R