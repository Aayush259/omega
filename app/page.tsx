"use client"
import { useState } from "react"
import View360 from "@/components/View360"
import Carousel from "@/components/Carousel"
import CarOverview from "@/components/CarOverview"
import PriceCalculator from "@/components/PriceCalculator"

export default function Home() {
    const [view360Open, setView360Open] = useState<boolean>(false)

    return (
        <div className="md:px-10 max-w-[2000px] mx-auto relative">
            <div className="flex flex-col md:flex-row items-start">
                {view360Open && <View360 setView360Open={setView360Open} />}
                <Carousel setView360Open={setView360Open} />
                <CarOverview />
            </div>
            <PriceCalculator />
        </div>
    )
}