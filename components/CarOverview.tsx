import { TbEngine } from "react-icons/tb"
import { BsFuelPumpDiesel } from "react-icons/bs"
import { IoSpeedometerOutline } from "react-icons/io5"
import { MdAirlineSeatReclineExtra, MdOutlineShutterSpeed } from "react-icons/md"

export default function CarOverview() {
    return (
        <div className="w-full md:w-[30%] p-2 md:p-4 overflow-hidden sticky top-0">
            <div className="border rounded-xl border-[#D9D9D9] p-2 md:p-4">
                <h1 className="font-semibold text-lg">{"2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD"}</h1>
                <p className="md:text-lg my-1">{"13K km · Diesel · Manual"}</p>
                <p className="text-xs md:text-sm font-semibold mt-2">{"Fixed on road price"}</p>
                <p className="text-xl md:text-2xl font-bold my-1">{"₹13.26 Lakh + 1% TCS"}</p>
                <p className="text-xs md:text-sm text-[#888888]">{"Includes RC transfer, insurance & more"}</p>

                <p className="text-lg font-semibold mt-6 mb-4">
                    {"Car Specifications"}
                </p>

                <div className="w-full grid grid-cols-2 gap-4 md:gap-8 items-center mb-8">
                    <div className="flex items-center gap-2">
                        <IoSpeedometerOutline size={24} className="text-[#6300A3]" />
                        <div className="flex flex-col gap-1">
                            <p className="text-xs md:text-sm text-[#888888] leading-[1]">{"Mileage (ARAI)"}</p>
                            <p className="text-sm md:text-base font-semibold leading-[1]">{"15 kmpl"}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <MdOutlineShutterSpeed size={24} className="text-[#6300A3]" />
                        <div className="flex flex-col gap-1">
                            <p className="text-xs md:text-sm text-[#888888] leading-[1]">{"Ground clearance"}</p>
                            <p className="text-sm md:text-base font-semibold leading-[1]">{"226 mm"}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <MdAirlineSeatReclineExtra size={24} className="text-[#6300A3]" />
                        <div className="flex flex-col gap-1">
                            <p className="text-xs md:text-sm text-[#888888] leading-[1]">{"Seating capacity"}</p>
                            <p className="text-sm md:text-base font-semibold leading-[1]">{"4 units"}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <BsFuelPumpDiesel size={24} className="text-[#6300A3]" />
                        <div className="flex flex-col gap-1">
                            <p className="text-xs md:text-sm text-[#888888] leading-[1]">{"Fuel tank capacity"}</p>
                            <p className="text-sm md:text-base font-semibold leading-[1]">{"57 litres"}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <TbEngine size={24} className="text-[#6300A3]" />
                        <div className="flex flex-col gap-1">
                            <p className="text-xs md:text-sm text-[#888888] leading-[1]">{"Displacement"}</p>
                            <p className="text-sm md:text-base font-semibold leading-[1]">{"2184 cc"}</p>
                        </div>
                    </div>
                </div>
                
                <button className="w-full text-center bg-[#6300A3] rounded-lg p-2.5 md:p-4 text-white text-xs md:text-sm font-semibold hover:opacity-80 cursor-pointer">
                    {"VIEW SIMILAR CARS"}
                </button>
            </div>
        </div>
    )
}