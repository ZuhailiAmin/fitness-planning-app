import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-indigo-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Welcome to Fitness Planner</h1>
          <p className="mt-4 text-lg">
            Your all-in-one solution for managing workouts, tracking progress, and achieving fitness goals.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-500 mb-8">About Fitness Planner</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Fitness Planner is an intuitive and powerful application designed for fitness enthusiasts of all levels.
            Whether you're a seasoned marathon runner or someone just starting out in the gym, this app helps you 
            organize your training, monitor your progress, and achieve your goals with ease.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-indigo-500 mb-8">Why Choose Fitness Planner?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Streamlined Planning"
              description="Easily schedule your workouts, whether they're running or strength training sessions."
            />
            <BenefitCard
              title="Data-Driven Insights"
              description="Get a clear view of your progress with visual charts and detailed stats."
            />
            <BenefitCard
              title="Goal-Oriented Approach"
              description="Set realistic goals and stay motivated to hit milestones with ease."
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-indigo-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold">Ready to Transform Your Fitness Journey?</h2>
          <p className="mt-4 text-lg">
            Join Fitness Planner today and take the first step towards a healthier, stronger you.
          </p>
          <div className="mt-6">
            <a
              href="/register"
              className="px-6 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const BenefitCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-indigo-500">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default Home;
