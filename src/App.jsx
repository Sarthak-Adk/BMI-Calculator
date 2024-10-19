import React, { useState } from 'react';

const App = () => {

  const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [bmi, setBMI] = useState(null);

    const calculateBMI = (e) => {
      e.preventDefault();  
      let weightInKg = weight;
      let heightInCm = height;

      if (weightUnit === 'lbs') {
        weightInKg /= 2.20462;
      }
      if (heightUnit === 'ft') {
        heightInCm *= 30.48;
      }

      const bmi = weightInKg / ((heightInCm / 100) ** 2);
      setBMI(bmi.toFixed(2));
    };

    const scaleBMI = () => {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    };

    const isValidInput = () => weight > 0 && height > 0;

    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-400">
          <div className='text-center'>
            <h1 className="text-4xl font-bold text-white mb-6">BMI Calculator</h1>

            <form className="bg-gray-300 p-8 rounded-md shadow-md w-80" onSubmit={calculateBMI}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your age"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Weight</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}  
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your weight"
                />
                <select
                  value={weightUnit}
                  onChange={(e) => setWeightUnit(e.target.value)}
                  className="ml-2"
                >
                  <option value="kg">Kilograms (kg)</option>
                  <option value="lbs">Pounds (lbs)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Height</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}  
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your height"
                />
                <select
                  value={heightUnit}
                  onChange={(e) => setHeightUnit(e.target.value)}
                  className="ml-2"
                >
                  <option value="cm">Centimeters (cm)</option>
                  <option value="ft">Feet (ft)</option>
                </select>
              </div>

              <button
                type="submit"
                className={`w-full text-white py-2 rounded-md ${isValidInput() ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gray-300'}`}
                disabled={!isValidInput()}
              >
                Submit
              </button>

              {bmi && (
                <div className="mt-4">
                  <p>Your BMI is: <strong>{bmi}</strong></p>
                  <p>You are classified as: <strong>{scaleBMI()}</strong></p>
                </div>
              )}
            </form>
          </div>
        </div>
      </>
    );
  };

  return <BMICalculator />;
};

export default App;
