import React, { useState } from 'react';

const GymTraining = () => {
  const [routine, setRoutine] = useState({
    monday: {
      type: 'Push',
      exercises: [
        { name: 'Bench Press', sets: 4, reps: 8, weight: '60kg' },
        { name: 'Overhead Press', sets: 3, reps: 10, weight: '40kg' },
        { name: 'Tricep Dips', sets: 3, reps: 12, weight: 'Bodyweight' },
        { name: 'Incline Dumbbell Press', sets: 4, reps: 8, weight: '25kg' },
        { name: 'Chest Flys', sets: 3, reps: 10, weight: '12kg' },
      ],
    },
    tuesday: {
      type: 'Pull',
      exercises: [
        { name: 'Pull Ups', sets: 4, reps: 8, weight: 'Bodyweight' },
        { name: 'Lat Pulldown', sets: 3, reps: 10, weight: '50kg' },
        { name: 'Barbell Rows', sets: 4, reps: 8, weight: '55kg' },
        { name: 'T-Bar Rows', sets: 4, reps: 8, weight: '40kg' },
        { name: 'Face Pulls', sets: 3, reps: 12, weight: '15kg' },
      ],
    },
    wednesday: {
      type: 'Legs',
      exercises: [
        { name: 'Squats', sets: 4, reps: 10, weight: '70kg' },
        { name: 'Leg Press', sets: 3, reps: 12, weight: '100kg' },
        { name: 'Lunges', sets: 3, reps: 12, weight: '20kg' },
        { name: 'Leg Curls', sets: 4, reps: 12, weight: '35kg' },
        { name: 'Calf Raises', sets: 3, reps: 15, weight: '60kg' },
      ],
    },
    thursday: {
      type: 'Push',
      exercises: [
        { name: 'Incline Dumbbell Press', sets: 4, reps: 10, weight: '22.5kg' },
        { name: 'Shoulder Press', sets: 4, reps: 8, weight: '30kg' },
        { name: 'Chest Flys', sets: 3, reps: 12, weight: '10kg' },
        { name: 'Lateral Raises', sets: 4, reps: 12, weight: '7.5kg' },
        { name: 'Tricep Rope Pushdowns', sets: 3, reps: 12, weight: '25kg' },
      ],
    },
    friday: {
      type: 'Pull',
      exercises: [
        { name: 'Deadlifts', sets: 4, reps: 6, weight: '100kg' },
        { name: 'T-Bar Rows', sets: 4, reps: 8, weight: '40kg' },
        { name: 'Face Pulls', sets: 3, reps: 12, weight: '15kg' },
        { name: 'Barbell Shrugs', sets: 3, reps: 10, weight: '80kg' },
        { name: 'Single Arm Dumbbell Rows', sets: 4, reps: 10, weight: '30kg' },
      ],
    },
    saturday: {
      type: 'Legs',
      exercises: [
        { name: 'Deadlifts', sets: 4, reps: 6, weight: '90kg' },
        { name: 'Bulgarian Split Squats', sets: 3, reps: 10, weight: '15kg' },
        { name: 'Leg Curls', sets: 4, reps: 12, weight: '35kg' },
        { name: 'Hip Thrusts', sets: 4, reps: 8, weight: '60kg' },
        { name: 'Calf Raises', sets: 4, reps: 15, weight: '50kg' },
      ],
    },
    sunday: {
      type: 'Rest',
      exercises: [],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Gym Training Routine</h2>
        <p className="text-center text-gray-600 mt-2">Organize your gym routines and monitor your strength progress.</p>

        <div className="mt-6 space-y-6">
          {Object.keys(routine).map((day) => {
            const dayRoutine = routine[day];
            return (
              <div
                key={day}
                className="bg-white shadow-md rounded-lg p-6 border-4 border-indigo-600"
              >
                <h3 className="text-2xl font-semibold text-gray-800 capitalize">{day}</h3>
                <p className="text-gray-600 mt-2">{dayRoutine.type} Workout</p>
                <div className="mt-4">
                  {dayRoutine.exercises.length === 0 ? (
                    <p className="text-gray-500">Rest Day</p>
                  ) : (
                    <ul className="space-y-3">
                      {dayRoutine.exercises.map((exercise, index) => (
                        <li key={index} className="flex justify-between text-gray-700">
                          <span>{exercise.name}</span>
                          <span>{exercise.sets} sets x {exercise.reps} reps x {exercise.weight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GymTraining;
