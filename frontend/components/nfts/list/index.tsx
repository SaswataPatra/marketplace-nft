import { FunctionComponent } from "react";
import NftItem from "../item";
import { NftMeta } from "@/types/nft";

interface NftListProps {
    children : NftMeta[]
}

const NftList: FunctionComponent<NftListProps> = ({children}) =>{
    return (
        <>
        {children.map((nft)=>(
            <div key = {nft.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <NftItem props={nft}/>
          </div>
        ))}
        </>
    )
}

export default NftList