import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the shape of the form data
interface FormData {
  email: string;
  fname: string;
  lname: string;
}

export default function MyForm() {
  // Initialize form state with an empty object of type FormData
  const [formData, setFormData] = useState<FormData>({
    email: '',
    fname: '',
    lname: '',
  });

  // Handle changes in input fields and update form state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form Data:', formData);
    // Reset the form fields after submission
    setFormData({
      email: '',
      fname: '',
      lname: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor: 'lightblue',color: 'black'}}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>First Name (fname):</label>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name (lname):</label>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
