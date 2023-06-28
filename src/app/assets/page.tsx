
import { Heading } from "~/components/atoms/Heading"
import { Heading2 } from "~/components/atoms/Heading2"
import { Heading3 } from "~/components/atoms/Heading3"
import { Subtitle } from "~/components/atoms/Subtitle"
import { Subtitle1 } from "~/components/atoms/Subtitle1"
import Image from "next/image"
import Link from 'next/link'

// Give me random data of 10 solor power controller 
const data = [
    {
        "id": "SPC001",
        "manufacturer": "ABC Electronics",
        "capacity": 1000,
        "voltage": 24,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC002",
        "manufacturer": "XYZ Solar",
        "capacity": 2000,
        "voltage": 48,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC003",
        "manufacturer": "SolarTech",
        "capacity": 1500,
        "voltage": 36,
        "status": "Inactive",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC004",
        "manufacturer": "SunPower Inc.",
        "capacity": 1200,
        "voltage": 12,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC005",
        "manufacturer": "EcoSolar",
        "capacity": 1800,
        "voltage": 24,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC006",
        "manufacturer": "SolarTech",
        "capacity": 900,
        "voltage": 12,
        "status": "Inactive",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC007",
        "manufacturer": "ABC Electronics",
        "capacity": 2500,
        "voltage": 48,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC008",
        "manufacturer": "XYZ Solar",
        "capacity": 3000,
        "voltage": 48,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC009",
        "manufacturer": "SunPower Inc.",
        "capacity": 2000,
        "voltage": 36,
        "status": "Inactive",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC010",
        "manufacturer": "EcoSolar",
        "capacity": 1200,
        "voltage": 24,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    }
]



export default function ControllerComponent() {

    return (
        <div
            className="bg-red-00 flex flex-col 
            items-start justify-center">
            <div className="p-4">
                <Heading text="Controllers" />
            </div>
            <div
                className="grid grid-cols-3 gap-3 w-full relative overflow-visible p-4
                dark:bg-gradient-to-l dark:from-slate-800 dark:to-slate-900"
            >
                {data.map((item) =>
                    <Link
                        href={`/assets/${item.id}`}
                    >
                        <div
                            key={item.id}
                            className=" bg-white dark:bg-slate-800 rounded-lg 
                        p-4 shadow-md hover:scale-105 hover:shadow-xl transition-all"
                        >
                            {/* <div
                            className="w-full gap-2 aspect-square overflow-hidden relative"
                            style={{ objectFit: 'cover', backgroundImage: `url(${item.imageURL!})` }}
                        /> */}
                            <div className="flex flex-col gap-2 py-2 w-full">
                                <Heading2 text={item.id} />
                                <div
                                    className="flex flex-col gap-2 w-full"
                                >
                                    <div >
                                        <Heading3 text={"Manufacturer"} />
                                        <Subtitle1 props={{ text: item.manufacturer }} />
                                    </div >
                                    <div>
                                        <Heading3 text={"Capicity"} />
                                        <Subtitle1 props={{ text: item.capacity.toString() }} />
                                    </div>
                                    <div>
                                        <Heading3 text={"Voltage"} />
                                        <Subtitle1 props={{ text: item.voltage.toString() }} />
                                    </div>
                                    <div>
                                        <Heading3 text={"Status"} />
                                        <Subtitle1 props={{ text: item.status.toString() }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div >
    )
}


