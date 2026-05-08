import React from 'react'
import HeroImage from '../assets/hero-bg.PNG'
import Group from '../assets/Group3.png'

const Hero = () => {
    return (
        <div
            id="hero"
            className="w-full px-6 lg:px-20 py-16 lg:py-24"
        >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* Badge */}
                    <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-5 py-2 rounded-full mb-6">
                        CLINICAL GRADE PROTOCOL
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-black leading-tight mb-6">
                        Describe how you feel. Get clarity in minutes.
                    </h1>

                    {/* Paragraph */}
                    <p className="text-gray-500 text-base sm:text-lg leading-7 sm:leading-8 mb-8 max-w-xl">
                        Get clinical grade insight and clear next steps for your symptoms,
                        powered by advanced medical protocols.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 lg:px-8 lg:py-4 text-sm lg:text-base rounded-full transition-all">
                            Start your free Triage
                        </button>

                        <button className="bg-gray-100 hover:bg-gray-200 text-black px-5 py-2 lg:px-8 lg:py-4 text-sm lg:text-base rounded-full transition-all">
                            How it works
                        </button>
                    </div>

                    {/* Users section */}
                    <div className="flex flex-col items-center lg:items-start gap-3">

                        <img
                            src={Group}
                            alt="Users"
                            className="w-28 sm:w-32"
                        />

                        <p className="text-gray-500 text-sm sm:text-base text-center lg:text-left">
                            Join 500+ users on our website
                        </p>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center">

                    <img
                        src={HeroImage}
                        alt="Hero"
                        className="w-full max-w-xl rounded-3xl object-cover"
                    />

                </div>

            </div>
        </div>
    )
}

export default Hero