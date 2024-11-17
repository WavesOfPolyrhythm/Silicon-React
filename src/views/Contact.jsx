import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({fullName: '', email: '', specialist: ''});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Regex from Chat GPT

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
    setErrors((prevErrors) => ({...prevErrors,[name]: '',}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const validateFields = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'You need to enter a valid email address';
    }
    if (!formData.specialist) {
      newErrors.specialist = 'Please select a specialist';
    }

    return newErrors;
  };

    const newErrors = validateFields();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      setSubmitted(true);

      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/consultation', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormData({ fullName: '', email: '', specialist: '' });
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div className="form-group">
        <h2>Your appointment request has been submitted!</h2>
      </div>
    );
  }

  return (
    <section className='contact'>
      <div className="form-group">
        <form onSubmit={handleSubmit} className="reg-form space-y-1" noValidate>
          <h2>Get Online Consultation</h2>
      
          <div className={`input-group ${errors.fullName ? 'error' : ''}`}>
            <label htmlFor="fullName" className="form-label">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
              required
            />
            {errors.fullName && <p className="invalid-input">{errors.fullName}</p>}
          </div>
          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
            {errors.email && <p className="invalid-input">{errors.email}</p>}
          </div>
          <div className={`input-group ${errors.specialist ? 'error' : ''}`}>
            <label className="form-label" htmlFor="specialist">Specialist</label>
              <select
                className="form-input"
                id="specialist"
                name="specialist"
                value={formData.specialist}
                onChange={handleChange}
                required
              >
              <option value="" disabled>Select a specialist</option>
              <option value="Specialist 1">Specialist 1</option>
              <option value="Specialist 2">Specialist 2</option>
              <option value="Specialist 3">Specialist 3</option>
            </select>
            {errors.specialist && <p className="invalid-input">{errors.specialist}</p>}
          </div>
          <button type="submit" className="button">Make an appointment</button>
      
          {errors.submit && (
            <div className="error-section">
              <span className="error">{errors.submit}</span>
            </div>
          )}
        </form>
      </div>
    </section>
    
  );
};

export default Contact;