import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import { IoMdRefresh, IoIosVolumeHigh } from "react-icons/io";
import algebrite from 'algebrite';

export default function CardFlip() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [equation, setEquation] = useState('');
    const [simplified, setSimplified] = useState('');

    useEffect(() => {
        generateEquation();
    }, []);

    const generateEquation = () => {
        const a = Math.floor(Math.random() * 9) + 1;
        const b = Math.floor(Math.random() * 9) + 1;
        const c = Math.floor(Math.random() * 9) + 1;
        const d = Math.floor(Math.random() * 9) + 1;
        const newEquation = `${a}x + ${b} + ${c}x - ${d}x`;
        try {
            const simplifiedEquation = algebrite.run(`simplify(${newEquation})`);
            setEquation(newEquation);
            setSimplified(simplifiedEquation);
        } catch (error) {
            console.error("Failed to simplify equation:", newEquation, error);
        }
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const refreshEquation = () => {
        generateEquation();
    };

    const speakEquation = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = equation; // Assuming 'equation' is the text you want to speak
        window.speechSynthesis.speak(msg);
    };

    return (
        <div className="flex justify-center flex-col items-center h-[20rem]">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className="bg-gradient-to-bl from-deep-blue via-darker-blue via-blue to-medium-blue text-white text-2xl rounded-lg p-4 w-96 h-56 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out"
                    onClick={handleFlip}>
                    {equation}
                </div>
                <div className="bg-gradient-to-bl from-darkblue to-lightblue text-white text-2xl rounded-lg p-4 w-96 h-56 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out"
                    onClick={handleFlip}>
                    {simplified}
                </div>
            </ReactCardFlip>
            <div className="flex gap-44 mt-4">
                <button className="text-4xl text-gradient-to-bl  from-deep-blue via-darker-blue to-medium-blue "
                    onClick={refreshEquation}>
                    <IoMdRefresh />
                </button>
                <button className="text-5xl text-gradient-to-r from-green-500 to-green-700 "
                    onClick={speakEquation}>
                    <IoIosVolumeHigh />
                </button>
            </div>
        </div>
    );
}
