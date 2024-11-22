import React from 'react';

const UserStats = () => {
  // Placeholder data
  const stats = {
    workoutStreak: 45, // Placeholder workout streak in days
    caloriesBurned: 3425, // Placeholder calories burned
    distanceCovered: 150, // Placeholder distance in kilometers
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">User Stats</h2>
        <p className="text-center text-gray-600 mt-2">Check your workout streak, calories burned, and distance covered.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Workout Streak Card */}
          <div className="bg-white shadow-md rounded-lg p-6 border-4 border-indigo-600">
            <h3 className="text-2xl font-semibold text-gray-800">Workout Streak</h3>
            <p className="text-gray-600 mt-2">You have been consistently working out for {stats.workoutStreak} days.</p>
          </div>

          {/* Calories Burned Card */}
          <div className="bg-white shadow-md rounded-lg p-6 border-4 border-indigo-600">
            <h3 className="text-2xl font-semibold text-gray-800">Calories Burned</h3>
            <p className="text-gray-600 mt-2">Total calories burned: {stats.caloriesBurned} kcal</p>
          </div>

          {/* Distance Covered Card */}
          <div className="bg-white shadow-md rounded-lg p-6 border-4 border-indigo-600">
            <h3 className="text-2xl font-semibold text-gray-800">Distance Covered</h3>
            <p className="text-gray-600 mt-2">Total distance covered: {stats.distanceCovered} km</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Keep Up the Great Work!</h3>
          <p className="text-gray-600 mt-2">
            You're making great progress. Keep pushing towards your goals!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
