import React, { useState } from 'react';

const FitnessGoals = () => {
  const [marathonGoal, setMarathonGoal] = useState({ hours: '', minutes: '', mileage: '' });
  const [gymGoals, setGymGoals] = useState({
    push: {},
    pull: {},
    legs: {},
  });
  const [caloriesGoal, setCaloriesGoal] = useState('');

  const handleMarathonGoalChange = (e) => {
    const { name, value } = e.target;
    setMarathonGoal({ ...marathonGoal, [name]: value });
  };

  const handleGymGoalChange = (workoutType, exercise, value) => {
    setGymGoals({
      ...gymGoals,
      [workoutType]: { ...gymGoals[workoutType], [exercise]: value },
    });
  };

  const handleCaloriesGoalChange = (e) => {
    setCaloriesGoal(e.target.value);
  };

  const submitGoals = () => {
    alert('Goals saved successfully!');
    // Add functionality to persist data here
  };

  const exercises = {
    push: ['Bench Press', 'Overhead Press', 'Incline Press', 'Dips', 'Push-ups'],
    pull: ['Pull-ups', 'Chin-ups', 'Barbell Rows', 'Lat Pulldown', 'Face Pulls'],
    legs: ['Squats', 'Deadlifts', 'Lunges', 'Leg Press', 'Calf Raises'],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Set Your Fitness Goals</h1>

        {/* Marathon Goals */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold text-gray-800">Marathon Training</h2>
          <p className="text-gray-600 mt-2">Set your target timing and weekly mileage.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Goal Time (Hours)</label>
              <input
                type="number"
                name="hours"
                value={marathonGoal.hours}
                onChange={handleMarathonGoalChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Hours"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Goal Time (Minutes)</label>
              <input
                type="number"
                name="minutes"
                value={marathonGoal.minutes}
                onChange={handleMarathonGoalChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Minutes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Weekly Mileage (km)</label>
              <input
                type="number"
                name="mileage"
                value={marathonGoal.mileage}
                onChange={handleMarathonGoalChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Weekly Mileage"
              />
            </div>
          </div>
        </div>

        {/* Gym Session Goals */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold text-gray-800">Gym Training Goals</h2>
          <p className="text-gray-600 mt-2">Set your target weights for each exercise.</p>
          {Object.keys(exercises).map((type) => (
            <div key={type} className="mt-6">
              <h3 className="text-xl font-medium text-gray-700 capitalize">{type} Exercises</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {exercises[type].map((exercise) => (
                  <div key={exercise}>
                    <label className="block text-sm font-medium text-gray-600">{exercise} (kg)</label>
                    <input
                      type="number"
                      value={gymGoals[type][exercise] || ''}
                      onChange={(e) => handleGymGoalChange(type, exercise, e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder={`Target weight for ${exercise}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Calories Burned Goals */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold text-gray-800">Calories Burned</h2>
          <p className="text-gray-600 mt-2">Set your weekly calorie-burning target.</p>
          <input
            type="number"
            value={caloriesGoal}
            onChange={handleCaloriesGoalChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-4"
            placeholder="Target calories burned per week"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={submitGoals}
            className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Save Goals
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitnessGoals;
