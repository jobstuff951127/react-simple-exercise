import React, { useState } from 'react';

const EmailForm = () => {
  // States
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);

  // Email validation function
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Event handlers
  const handleEmailChanges = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidEmail(validateEmail());
  };

  // Conditional styling
  const inputStyle = {
    width: '100%',
    border: isValidEmail === null ? '1px solid #ccc' : isValidEmail ? '1px solid green' : '1px solid red',
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChanges}
          style={inputStyle}
          placeholder="Enter your email"
        />
      </label>
      {isValidEmail !== null && <p style={{ color: isValidEmail ? 'green' : 'red' }}> {isValidEmail ? 'Email valid' : 'Email not valid'}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default EmailForm;
