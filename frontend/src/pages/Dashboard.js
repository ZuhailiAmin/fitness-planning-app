import React from 'react';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Placeholder data for Weekly Running Progress (Line Chart)
const runningProgressData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
  datasets: [
    {
      label: 'Distance (km)',
      data: [5, 7, 8, 6, 10, 12, 15], // Example data
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
    },
  ],
};

const runningProgressOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Weekly Running Progress' },
  },
};

// Placeholder data for Gym Session Trends (Bar Chart)
const gymTrendsData = {
  labels: ['Push', 'Pull', 'Legs'], // Workout categories
  datasets: [
    {
      label: 'Total Sets Completed',
      data: [45, 30, 60], // Example data
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const gymTrendsOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Gym Session Trends' },
  },
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Marathon Training</h2>
            <p className="text-gray-600 mt-2">
              Track your progress and manage your runs leading up to race day.
            </p>
            <Link to="/marathon-training">
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                View Plan
              </button>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Gym Training</h2>
            <p className="text-gray-600 mt-2">
              Organize your gym routines and monitor your strength progress.
            </p>
            <Link to="/gym-training">
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                View Plan
              </button>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">User Stats</h2>
            <p className="text-gray-600 mt-2">
              Check your workout streak, calories burned, and distance covered.
            </p>
            <Link to="/user-stats">
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                View Stats
              </button>
            </Link>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Weekly Running Progress</h2>
            <div className="mt-4">
              <Line data={runningProgressData} options={runningProgressOptions} />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Gym Session Trends</h2>
            <div className="mt-4">
              <Bar data={gymTrendsData} options={gymTrendsOptions} />
            </div>
          </div>
        </div>

          {/* Footer Section */}
          <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Fitness Goals</h2>
          <p className="text-gray-600 mt-2">
            Set new fitness goals and achieve milestones!
          </p>
          <Link to="/fitness-goals">
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                View Plan
              </button>
            </Link>
        </div>
  
      </div>
    </div>
  );
};

export default Dashboard;