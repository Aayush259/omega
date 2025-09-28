"use client"
import { useState } from "react"

const BASE_PRICE = 100

export default function PriceCalculator() {
    const [invites, setInvites] = useState<number>(1)
    const [eventDuration, setEventDuration] = useState<number>(0.5)
    const [calculatedPrice, setCalculatedPrice] = useState<number>(1 * 0.5 * 100)

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        const min = Number(e.target.min)
        const max = Number(e.target.max)
        const percent = ((value - min) * 100) / (max - min)

        e.target.style.setProperty("--range-progress", `${percent}%`)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCalculatedPrice(invites * eventDuration * BASE_PRICE)
    }

    return (
        <div className=" p-4 md:p-8 max-w-xl mx-auto">
            <p className="text-lg font-semibold mt-6 mb-4">
                {"Price Calculator"}
            </p>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="invites" className="flex font-semibold items-center justify-between gap-2 text-[#6300A3]">
                    <p className="text-sm">{"No. of Invites"}</p>
                    <p>{invites.toLocaleString()}</p>
                </label>
                <input
                    type="range"
                    name="invites"
                    id="invites"
                    min="1"
                    max="1000"
                    value={invites}
                    onChange={(e) => {
                        const value = Number(e.target.value)
                        setInvites(value)
                        handleRangeChange(e)
                    }}
                    className="accent-[#6300A3] my-3"
                />
                <div className="text-sm flex items-center justify-between gap-2 text-[#888888]">
                    <p>{"1"}</p>
                    <p>{"1,000"}</p>
                </div>

                <label htmlFor="duration" className="flex font-semibold items-center justify-between gap-2 text-[#6300A3] mt-6">
                    <p className="text-sm">{"Duration of Event"}</p>
                    <p>{eventDuration.toLocaleString()}{" hrs"}</p>
                </label>
                <input
                    type="range"
                    name="duration"
                    id="duration"
                    min="0.5"
                    max="8"
                    value={eventDuration}
                    onChange={(e) => {
                        const value = Number(e.target.value)
                        setEventDuration(value)
                        handleRangeChange(e)
                    }}
                    className="accent-[#6300A3] my-3"
                />
                <div className="text-sm flex items-center justify-between gap-2 text-[#888888]">
                    <p>{"30 mins"}</p>
                    <p>{"8 hrs"}</p>
                </div>

                <div className="border-t border-[#D9D9D9] my-8 py-4">
                    <p className="text-xl md:text-2xl font-bold my-1 text-green-600">{"₹"}{calculatedPrice.toLocaleString()}<span className="text-sm">{" per month"}</span></p>

                    <button type="submit" className="w-full text-center bg-[#6300A3] rounded-lg p-2.5 md:p-4 text-white text-xs md:text-sm font-semibold hover:opacity-80 cursor-pointer">
                        {"CALCULATE PRICE"}
                    </button>
                </div>
            </form>
        </div>
    )
}