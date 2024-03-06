'use client'
import React,{useState} from "react";

export default function Home() {
    const [FirstName, setFirstName] = useState("Leo");
    return (
        <body>
            <h2 className="mt-20">
                Welcome, {FirstName}
            </h2>
            {/* Container div with flexbox layout */}
            <div className="flex justify-center h-screen mt-10">
                <div className="w-90p">
                    {/* Box */}
                    <div className="bg-blue-500 rounded-lg shadow-lg w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-100">
                        {/* Adjust the height of the box using Tailwind CSS height classes */}
                        <h1 className="text-white text-2xl font-bold">Box in the top of the screen</h1>
                        <p className="text-white">This box is at the top of the screen.</p>
                    </div>
                </div>
            </div>
        </body>
    );
}
