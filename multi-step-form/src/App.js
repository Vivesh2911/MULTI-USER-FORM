import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import FormNavigation from './components/FormNavigation';
import './styles.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {};
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Implement submission logic here

    // Show an alert
    alert('Form submitted successfully!');

    // Clear form data and reset to step 1
    setFormData({});
    localStorage.removeItem('formData');
    setCurrentStep(1);
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="App">
      <FormNavigation currentStep={currentStep} setStep={setCurrentStep} />
      {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} setStep={setCurrentStep} />}
      {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} setStep={setCurrentStep} />}
      {currentStep === 3 && <Step3 formData={formData} setStep={setCurrentStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;
