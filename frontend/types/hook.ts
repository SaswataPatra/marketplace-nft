import { MetaMaskInpageProvider } from "@metamask/providers"
import { Contract } from "ethers"
import { BrowserProvider } from "ethers"


export type Web3Dependencies = {
    ethereum : MetaMaskInpageProvider,
    provider : BrowserProvider,
    contract : Contract
}