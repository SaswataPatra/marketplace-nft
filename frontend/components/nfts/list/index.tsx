import { FunctionComponent } from "react";
import NftItem from "../item";


const NftList: FunctionComponent = () =>{
    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <NftItem></NftItem>
      </div>
    )
}

export default NftList