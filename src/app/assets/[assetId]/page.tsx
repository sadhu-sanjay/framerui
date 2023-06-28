import Image from "next/image"
import img1 from '~/assets/images/asset.jpg'
import { Heading2 } from "~/components/atoms/Heading2"
import { Heading3 } from "~/components/atoms/Heading3"
import { Subtitle1 } from "~/components/atoms/Subtitle1"
import { assetData } from "~/data/data"

export default function AssetDetails(
    {
        params
    }: {
        params: {
            assetId: string
        }
    }) {

    const asset = assetData.find(asset => asset.id === params.assetId)

    if (!asset) return <div>Asset not found</div>

    return (
        <div
            className="bg-gray-100 text-gray-900
        dark:text-gray-100 w-full h-auto ">
            <div className="p-8 flex flex-row justify-between items-center">
                <div className="w-[30%] gap-3 flex flex-col justify-between items-start">
                    <div
                        className="w-full flex flex-row justify-between gap-4 items-center"
                    >
                        <Heading2 text={asset.id} />
                    </div>
                    <div
                        className="w-full flex flex-col justify-between items-start"
                    >
                        <h1 className="text-xl font-bold" >Asset Details </h1>
                        <Subtitle1 props={{ text: "Solar Charge Controller is an electronic device that manages the power going into the battery bank from the solar array. It ensures that the deep cycle batteries are not overcharged during the day and that the power doesn’t run back to the solar panels overnight and drain the batteries. Some charge controllers are available with additional capabilities, like lighting and load control, but managing the power is its primary job. " }} />
                    </div>
                    <div
                        className="w-full flex flex-row justify-between items-start"
                    >
                        <h1 className="text-xl font-bold" >Capicity</h1>
                        <Subtitle1 props={{ text: asset.capacity.toString() }} />
                    </div>
                    <div
                        className="w-full flex flex-row justify-between items-start"
                    >
                        <h1 className="text-xl font-bold" >Manufacturer</h1>
                        <Subtitle1 props={{ text: asset.manufacturer }} />
                    </div>
                    <div
                        className="w-full flex flex-row justify-between items-start"
                    >
                        <h1 className="text-xl font-bold" >Voltage</h1>
                        <Subtitle1 props={{ text: asset.voltage.toString() }} />
                    </div>
                    <div
                        className="w-full flex flex-row justify-between items-start"
                    >
                        <h1 className="text-xl font-bold" >Status</h1>
                        <Subtitle1 props={{ text: asset.status }} />
                    </div>
                </div>
                <div
                    className="w-[46%] rounded-lg gap-2 aspect-square overflow-hidden relative"
                >
                    <Image alt="Battery Image" src={asset.imageURL} fill />
                </div> 
            </div>
        </div>
    )
}



