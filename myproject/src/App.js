//專案的根組件，一切組件的根組件
//App >被導入入到 index.jx >public/index.html(root)

import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineStatus(bmiValue);
    }
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus('過輕');
    } else if (bmiValue >= 18.5 && bmiValue < 24) {
      setStatus('健康');
    } else if (bmiValue >= 24 && bmiValue < 27) {
      setStatus('過重');
    } else {
      setStatus('肥胖');
    }
  };

  return (
    <div>
      
      <h1>BMI 計算器</h1>
      <div>
        <label>
          體重 (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          身高 (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>

      <button onClick={calculateBMI}>計算</button>
      {bmi && (
        <div>
          <h2>BMI: {bmi}</h2>
          <h3>體重狀態: {status}</h3>
        </div>
      )}

    </div>
  );
};

export default BMICalculator;
