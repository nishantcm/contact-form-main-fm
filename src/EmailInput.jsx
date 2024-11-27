import React, { useState } from 'react';

function EmailInput() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  };

  return (
    <div className="mb-3">
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className="form-control"
        required
      />
      {!isValid && <p>Invalid email format</p>}
    </div>
  );
}

export default EmailInput;