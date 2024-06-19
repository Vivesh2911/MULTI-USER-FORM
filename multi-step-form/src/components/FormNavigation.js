import React from 'react';

const FormNavigation = ({ currentStep, setStep }) => {
  const steps = ["Personal Information", "Address Information", "Confirmation"];

  const handleStepClick = (stepIndex) => {
    setStep(stepIndex + 1);
  };

  return (
    <div className="form-navigation">
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`step ${currentStep === index + 1 ? 'active' : ''}`}
          onClick={() => handleStepClick(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default FormNavigation;
