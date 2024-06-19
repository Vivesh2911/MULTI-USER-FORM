import React from 'react';

const Step3 = ({ formData, setStep, handleSubmit }) => {
  const handleBack = () => setStep(2);

  return (
    <div>
      <h2>Confirmation</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Address Line 1: {formData.address1}</p>
        <p>Address Line 2: {formData.address2}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip Code: {formData.zip}</p>
      </div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
