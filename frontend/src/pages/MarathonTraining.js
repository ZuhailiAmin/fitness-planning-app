import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const MarathonTraining = () => {
  const initialPlan = [
    { day: 'Monday', type: 'Rest', completed: false },
    { day: 'Tuesday', type: 'Speedwork: 5x800m', distance: 4, completed: false },
    { day: 'Wednesday', type: 'Recovery Run', distance: 5, completed: false },
    { day: 'Thursday', type: 'Tempo Run', distance: 10, completed: false },
    { day: 'Friday', type: 'Rest', completed: false },
    { day: 'Saturday', type: 'Long Run', distance: 20, completed: false },
    { day: 'Sunday', type: 'Recovery Run', distance: 6, completed: false },
  ];

  const [trainingPlan, setTrainingPlan] = useState(
    JSON.parse(localStorage.getItem('trainingPlan')) || initialPlan
  );

  const [progressData, setProgressData] = useState(
    JSON.parse(localStorage.getItem('progressData')) || []
  );

  useEffect(() => {
    localStorage.setItem('trainingPlan', JSON.stringify(trainingPlan));
  }, [trainingPlan]);

  useEffect(() => {
    localStorage.setItem('progressData', JSON.stringify(progressData));
  }, [progressData]);

  const toggleCompletion = (index) => {
    const updatedPlan = trainingPlan.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );

    const completedData = updatedPlan.filter((item) => item.completed && item.distance).map((item) => ({
      name: item.day,
      km: item.distance,
    }));

    setTrainingPlan(updatedPlan);
    setProgressData(completedData);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-indigo-600 text-center">Marathon Training Plan</h1>
      <p className="text-lg text-gray-600 text-center mt-2">Track your progress and get ready for race day!</p>

      {/* Progress Tracker */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800">Week 5 of 12</h2>
        <p className="text-gray-600 mt-2">Race Day Countdown: 42 days</p>
        <div className="w-full bg-gray-200 rounded-full mt-4">
          <div
            className="bg-indigo-500 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
            style={{ width: `${(trainingPlan.filter((item) => item.completed).length / trainingPlan.length) * 100}%` }}
          >
            {Math.round((trainingPlan.filter((item) => item.completed).length / trainingPlan.length) * 100)}% Complete
          </div>
        </div>
      </div>

      {/* Training Plan */}
      <div className="space-y-4 mt-6">
        {trainingPlan.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.day}</h3>
              <p className="text-gray-600">{item.type} {item.distance ? `(${item.distance} km)` : ''}</p>
            </div>
            <button
              onClick={() => toggleCompletion(index)}
              className={`px-4 py-2 rounded-lg ${
                item.completed
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              {item.completed ? 'Completed' : 'Mark as Done'}
            </button>
          </div>
        ))}
      </div>

      {/* Progress Chart */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Weekly Running Progress</h3>
        {progressData.length > 0 ? (
          <LineChart
            width={500}
            height={300}
            data={progressData}
            className="mx-auto"
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <Line type="monotone" dataKey="km" stroke="#8884d8" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        ) : (
          <p className="text-gray-600 text-center">Complete a session to see your progress!</p>
        )}
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Marathon Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Hydrate before, during, and after runs.</li>
          <li>Gradually increase weekly mileage to avoid injuries.</li>
          <li>Invest in good running shoes and replace them every 500 km.</li>
          <li>Incorporate rest days to allow your body to recover.</li>
          <li>Practice running at your goal pace for race day.</li>
          <li>Use proper warm-ups and cool-down stretches.</li>
        </ul>
      </div>
    </div>
  );
};

export default MarathonTraining;
