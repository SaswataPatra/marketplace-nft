// import useSWR from "swr"


// const hookFactory : CryptoHookFactory<string,string> =({provider}) => (params) =>{
//     const swrRes = useSWR(provider?"hooks/web3/useAccount":null,()=>{
//         console.log(params)
//         console.log(provider)
//         return "Test user"
//     })
//     return swrRes
// }

// export default hookFactory = CryptoHookFactory({ethereum : null, provider : null})