import React from 'react';

const About = () => {
  return (
    <div className="bg-indigo-50 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          Hi there! I'm a passionate and driven individual focused on making an impact at the intersection of technology and business. My journey is centered around continuous learning, with a strong interest in AI, cloud solutions, and full-stack development.
        </p>
        
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Professional Background</h2>
        <p className="text-lg text-gray-700 mb-6">
          I currently work at UOB, specializing in voice infrastructure, including managing the integration of Cisco and Avaya systems. With a deep understanding of infrastructure, platform services, and change management, I ensure seamless communication solutions for the organization.
        </p>
        
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Projects & Achievements</h2>
        <ul className="space-y-4 mb-6">
          <li className="text-lg text-gray-700">
            <strong className="text-indigo-600">UOB Fraud Detection Web Application:</strong> A project focused on designing an AI-based fraud detection system for banks.
          </li>
          <li className="text-lg text-gray-700">
            <strong className="text-indigo-600">Customer Reviews Big Data Pipeline:</strong> Analyzing customer feedback using big data technologies to drive insights for businesses.
          </li>
          <li className="text-lg text-gray-700">
            <strong className="text-indigo-600">Capstone Project Runner-Up:</strong> Contributing to my team's success in our capstone project with impactful solutions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Current Goals</h2>
        <p className="text-lg text-gray-700 mb-6">
          I am actively working towards becoming an entry-level software engineer. To achieve this, I am sharpening my coding skills through projects like the <strong className="text-indigo-600">fitness-planner-app</strong>, which merges marathon and gym training features into a comprehensive solution for fitness enthusiasts.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">What Drives Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          What excites me most is the potential to combine cutting-edge technology with real-world applications. I'm committed to learning every day and embracing challenges that push my skills to new heights.
        </p>

        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>Always eager to learn, grow, and make a meaningful contribution.</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
