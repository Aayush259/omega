"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const IMAGES_COUNT = 8
const CAR_OVERVIEW = [
    { title: "Make Year", value: "Aug 2021" },
    { title: "Registration Year", value: "Dec 2021" },
    { title: "Fuel Type", value: "Diesel" },
    { title: "Km driven", value: "13K km" },
    { title: "Transmission", value: "Manual (regular)" },
    { title: "No. of Owner", value: "1st Owner" },
    { title: "Insurance Validity", value: "Nov 2025" },
    { title: "Insurance Type", value: "Third Party" },
    { title: "RTO", value: "DL3C" },
    { title: "Car Location", value: "Sector-29, Gurgaon" }
]

export default function Carousel({ setView360Open }: { setView360Open: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [activeIdx, setActiveIdx] = useState<number>(0)
    const thumbRefs = useRef<(HTMLDivElement | null)[]>([])
    const thumbContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIdx((activeIdx + 1) % IMAGES_COUNT)
        }, 10000)

        return () => clearInterval(interval)
    }, [activeIdx])

    useEffect(() => {
        const el = thumbRefs.current[activeIdx]
        if (el && thumbContainerRef.current) {
            const container = thumbContainerRef.current
            const containerRect = container.getBoundingClientRect()
            const elementRect = el.getBoundingClientRect()
            const scrollLeft = el.offsetLeft - (containerRect.width / 2) + (elementRect.width / 2)
            
            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth"
            })
        }
    }, [activeIdx])

    const scrollThumbnails = (direction: 'left' | 'right') => {
        if (thumbContainerRef.current) {
            const scrollAmount = 200
            const currentScroll = thumbContainerRef.current.scrollLeft
            const newScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount

            thumbContainerRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="w-full md:w-[70%] p-2 md:p-4 overflow-hidden">
            <div className="w-full overflow-hidden flex items-center grow-0 shrink-0 rounded-xl relative">
                {Array.from({ length: IMAGES_COUNT }).map((_, idx) => (
                    <Image
                        key={idx}
                        src={`/carImages/${idx + 1}.avif`}
                        alt="Car"
                        height={512}
                        width={910}
                        priority={idx === 0}
                        className="!w-full !h-auto grow-0 shrink-0 duration-500"
                        style={{
                            transform: `translateX(-${100 * activeIdx}%)`,
                        }}
                    />
                ))}

                <button className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black/50 py-1.5 px-3 text-white text-sm rounded-lg hover:opacity-80" aria-label="View 360" onClick={() => setView360Open(true)}>
                    {"Click to view 360°"}
                </button>

                <button
                    className="w-9 h-10 absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white z-10 pl-1 cursor-pointer hover:opacity-80"
                    aria-label="Previous"
                    onClick={() => setActiveIdx((activeIdx - 1 + IMAGES_COUNT) % IMAGES_COUNT)}
                >
                    <FaChevronLeft size={24} />
                </button>

                <button
                    className="w-9 h-10 absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white z-10 pr-1 cursor-pointer hover:opacity-80"
                    aria-label="Next"
                    onClick={() => setActiveIdx((activeIdx + 1) % IMAGES_COUNT)}
                >
                    <FaChevronRight size={24} className="ml-auto" />
                </button>
            </div>

            <div className="w-full overflow-hidden relative my-4 md:my-8">
                <div
                    ref={thumbContainerRef}
                    className="w-full overflow-x-auto flex items-center grow-0 shrink-0 [&::-webkit-scrollbar]:hidden"
                >
                    {Array.from({ length: IMAGES_COUNT }).map((_, idx) => (
                        <div
                            key={idx}
                            ref={(el) => {
                                thumbRefs.current[idx] = el
                            }}
                            className="grow-0 shrink-0 w-[33.3333%] md:w-[20%] p-2"
                        >
                            <Image
                                src={`/carImages/${idx + 1}.avif`}
                                alt="Car"
                                height={64}
                                width={128}
                                priority
                                className={`!w-full !h-auto cursor-pointer rounded-xl duration-300 ${activeIdx === idx ? "ring-2 ring-black" : ""
                                    }`}
                                onClick={() => setActiveIdx(idx)}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="h-[calc(100%-16px)] absolute left-0 top-2 bg-black/80 text-white z-10 p-1 cursor-pointer hover:opacity-80 rounded-l-xl"
                    aria-label="Previous"
                    onClick={() => scrollThumbnails('left')}
                >
                    <FaChevronLeft size={20} />
                </button>

                <button
                    className="h-[calc(100%-16px)] absolute right-0 top-2 bg-black/80 text-white z-10 p-1 cursor-pointer hover:opacity-80 rounded-r-xl"
                    aria-label="Next"
                    onClick={() => scrollThumbnails('right')}
                >
                    <FaChevronRight size={20} className="ml-auto" />
                </button>
            </div>

            <div className="my-4 md:my-8">
                <p className="text-lg font-semibold mt-6 mb-4">
                    {"Car Overview"}
                </p>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center border border-[#D9D9D9] p-2 md:p-6 !pb-0 !pt-0 md:!pt-2 rounded-lg no-border-last-row-2 no-border-last-row-3">
                    {CAR_OVERVIEW.map((overview, idx) => (
                        <div key={idx} className="flex flex-col gap-1 p-2 md:p-4 border-b border-[#D9D9D9]">
                            <p className="text-xs md:text-sm text-[#888888] leading-[1]">{overview.title}</p>
                            <p className="text-sm md:text-base font-semibold leading-[1]">{overview.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}