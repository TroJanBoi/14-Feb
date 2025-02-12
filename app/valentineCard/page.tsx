"use client";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ValentineCard() {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(prev => !prev);
        if (!isOpened) {
            fireworkEffect();
        }
    };

    const fireworkEffect = () => {
        confetti({
            particleCount: 100,
            spread: 120,
            startVelocity: 40,
            origin: { x: 0.5, y: 0.6 }, // Center of screen
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-pink-200 px-4">
            <button
                onClick={handleClick}
                style={{
                    backgroundColor: isOpened ? "white" : "#fb7185",
                    transform: isOpened ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.8s ease-in-out",
                    transformStyle: "preserve-3d",
                }}
                className="flex justify-center items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] p-6 border-8 border-white rounded-lg shadow-2xl"
            >
                {!isOpened ? (
                    <div className="flex justify-center items-center rounded-md py-10 px-16 w-fit h-full hover:cursor-pointer bg-white">
                        <h1 className="text-black text-lg sm:text-2xl md:text-4xl itim-regular text-center">Click to Flip</h1>
                    </div>
                ) : null}
                {isOpened ? (
                    <div
                        className="flex flex-col justify-center items-center w-full h-full text-center"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <h1 className="text-black text-lg sm:text-2xl md:text-3xl itim-regular mb-4">
                            Happy Valentine's Day ❤️
                        </h1>
                        <img
                            className="w-32 sm:w-48 md:w-56 lg:w-64"
                            src="https://i.pinimg.com/originals/ec/6b/7b/ec6b7b6b255d6f96c27d4911519829cb.gif"
                            alt="Valentine Animation"
                        />
                    </div>
                ) : null}
            </button>
        </div>
    );
}
