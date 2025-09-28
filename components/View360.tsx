"use client"
import Image from "next/image"
import { IoClose } from "react-icons/io5"
import { useState, useRef, useCallback } from "react"

const IMAGES_COUNT = 91

export default function View360({ setView360Open }: { setView360Open: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [activeImageIdx, setActiveImageIdx] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [dragStartX, setDragStartX] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleDragStart = useCallback((clientX: number) => {
        setIsDragging(true)
        setDragStartX(clientX)
    }, [])

    const handleDragMove = useCallback((clientX: number) => {
        if (!isDragging) return
        
        const deltaX = clientX - dragStartX
        const threshold = 10
        
        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                setActiveImageIdx(prev => prev === IMAGES_COUNT - 1 ? 0 : prev + 1)
                console.log(activeImageIdx)
            } else {
                setActiveImageIdx(prev => prev === 0 ? IMAGES_COUNT - 1 : prev - 1)
                console.log(activeImageIdx)
            }
            setDragStartX(clientX)
        }
    }, [isDragging, dragStartX])

    const handleDragEnd = useCallback(() => {
        setIsDragging(false)
    }, [])

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        handleDragStart(e.clientX)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX)
    }

    const handleMouseUp = () => {
        handleDragEnd()
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault()
        handleDragStart(e.touches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        handleDragEnd()
    }

    return (
        <div className="w-screen h-screen fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center bg-black/30 select-none">
            <button className="absolute top-4 right-8 z-20 h-9 w-9 flex items-center justify-center bg-black/30 text-white rounded-full cursor-pointer" onClick={() => setView360Open(false)}>
                <IoClose size={24} />
            </button>
            <div
                ref={containerRef}
                className="w-full h-fit mx-auto flex items-center shrink-0 grow-0 overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {Array.from({ length: IMAGES_COUNT }).map((_, idx) => (
                    <Image
                        key={idx}
                        priority
                        src={`/car/car-${idx + 1}.avif`}
                        alt="Car"
                        height={512}
                        width={910}
                        className="!w-[100vw] !h-auto shrink-0 grow-0"
                        draggable={false}
                        style={{
                            transform: `translateX(-${activeImageIdx * 100}vw)`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}