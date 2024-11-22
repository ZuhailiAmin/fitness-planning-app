import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marathon Training</h2>
            <p className="text-gray-600 mt-2">
              Track your progress and manage your runs leading up to race day.
            </p>
            <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              View Plan
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Gym Training</h2>
            <p className="text-gray-600 mt-2">
              Organize your gym routines and monitor your strength progress.
            </p>
            <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              View Plan
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">User Stats</h2>
            <p className="text-gray-600 mt-2">
              Check your workout streak, calories burned, and distance covered.
            </p>
            <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              View Stats
            </button>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Weekly Running Progress</h2>
            <div className="mt-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">[Chart Placeholder]</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Gym Session Trends</h2>
            <div className="mt-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">[Chart Placeholder]</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Fitness Goals</h2>
          <p className="text-gray-600 mt-2">
            Set new fitness goals and achieve milestones!
          </p>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Set Goals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
