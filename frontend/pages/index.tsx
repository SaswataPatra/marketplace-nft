import Image from "next/image";
import { Inter } from "next/font/google";
import BaseLayout from "@/components/ui/Layout/BaseLayout";
import { NftList } from "@/components/nfts";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BaseLayout>
     <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Amazing Creatures NFTs</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Mint a NFT to get unlimited ownership forever!
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <NftList/>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
