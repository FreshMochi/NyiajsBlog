import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  email: string;
  fname: string;
  lname: string;
}

export default function MyForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    fname: '',
    lname: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Send a POST request to the '/api/signup' endpoint with form data
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Handle a successful submission
        setSubmissionStatus('Success: Post created successfully');
        // Reset the form fields after a successful submission
        setFormData({
          email: '',
          fname: '',
          lname: '',
        });
      } else {
        // Handle errors from the API
        const data = await response.json();
        setSubmissionStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      setSubmissionStatus('Error: Internal Server Error');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Display submission status (success or error) */}
      {submissionStatus && <p>{submissionStatus}</p>}
      <form onSubmit={handleSubmit} style={{backgroundColor: 'lightblue',color: 'black'}}>
      <div>
        <label>Email:</label>
        <input
          placeholder='Email'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
        placeholder='First Name'
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
        placeholder='Last Name'
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
