import React, { useState, useEffect } from 'react';

const Step2 = ({ formData, setFormData, setStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.address1) tempErrors.address1 = "Address Line 1 is required.";
    if (!formData.city) tempErrors.city = "City is required.";
    if (!formData.state) tempErrors.state = "State is required.";
    if (!formData.zip) tempErrors.zip = "Zip Code is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(3);
  };

  const handleBack = () => setStep(1);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      <h2>Address Information</h2>
      <input 
        type="text" 
        placeholder="Address Line 1" 
        value={formData.address1 || ''} 
        onChange={(e) => setFormData({...formData, address1: e.target.value})}
      />
      {errors.address1 && <p>{errors.address1}</p>}
      
      <input 
        type="text" 
        placeholder="Address Line 2" 
        value={formData.address2 || ''} 
        onChange={(e) => setFormData({...formData, address2: e.target.value})}
      />
      
      <input 
        type="text" 
        placeholder="City" 
        value={formData.city || ''} 
        onChange={(e) => setFormData({...formData, city: e.target.value})}
      />
      {errors.city && <p>{errors.city}</p>}
      
      <input 
        type="text" 
        placeholder="State" 
        value={formData.state || ''} 
        onChange={(e) => setFormData({...formData, state: e.target.value})}
      />
      {errors.state && <p>{errors.state}</p>}
      
      <input 
        type="text" 
        placeholder="Zip Code" 
        value={formData.zip || ''} 
        onChange={(e) => setFormData({...formData, zip: e.target.value})}
      />
      {errors.zip && <p>{errors.zip}</p>}
      
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
