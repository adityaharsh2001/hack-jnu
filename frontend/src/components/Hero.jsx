import React from 'react';

const FeatureCard = ({ title, description, iconClass }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className={`text-3xl mb-4 ${iconClass}`}></div>
            <h3 className="text-xl font-semibold text-purple-500 mb-2">{title}</h3>
            <p className="text-gray-800">{description}</p>
        </div>
    );
};

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen  text-white '>
            <h1 className='text-4xl md:text-5xl lg:text-6xl capitalize font-bold text-center mb-6'>
                Transform Legal Processes with<span className='text-purple-300'> Differentiated Case Flow </span>Management
            </h1>
            <p className='text-3xl text-purple-300 text-center mb-8'>
                Empower the Indian judiciary with our seamless Case Flow Management system.
            </p>
            <button className="btn mb-5 bg-purple-500 hover:bg-purple-400 text-lg text-white px-8 py-2 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none mt-8">
                Explore More
            </button>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    title="Accurate Data with Gemini Pro"
                    description="Precision through Gemini Pro technology for reliable decision-making in legal processes."
                    iconClass="icon-gemini-pro"  // Replace with your actual icon class or component
                />
                <FeatureCard
                    title="Up to Date Data"
                    description="Real-time updates for legal professionals, ensuring the latest information for case management."
                    iconClass="icon-up-to-date"  // Replace with your actual icon class or component
                />
                <FeatureCard
                    title="Faster Justice Delivery"
                    description="Improved case flow management leading to faster justice delivery and efficient resolution of legal matters."
                    iconClass="icon-fast-justice"  // Replace with your actual icon class or component
                />
            </div>
        </div>
    );
};

export default Hero;
