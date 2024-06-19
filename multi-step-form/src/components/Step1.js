import React, { useState, useEffect } from 'react';

const Step1 = ({ formData, setFormData, setStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
    if (!formData.phone) tempErrors.phone = "Phone is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(2);
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      <h2>Personal Information</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={formData.name || ''} 
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      {errors.name && <p>{errors.name}</p>}
      
      <input 
        type="email" 
        placeholder="Email" 
        value={formData.email || ''} 
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      {errors.email && <p>{errors.email}</p>}
      
      <input 
        type="tel" 
        placeholder="Phone" 
        value={formData.phone || ''} 
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      {errors.phone && <p>{errors.phone}</p>}
      
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
