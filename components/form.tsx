import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/form.module.css";

interface FormData {
  email: string;
  fname: string;
  lname: string;
  message: string;
}

export default function MyForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fname: "",
    lname: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

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
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Handle a successful submission
        setSubmissionStatus("Success: Post created successfully");
        // Reset the form fields after a successful submission
        setFormData({
          email: "",
          fname: "",
          lname: "",
          message: ""
        });
      } else {
        // Handle errors from the API
        const data = await response.json();
        setSubmissionStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      setSubmissionStatus("Error: Internal Server Error");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Display submission status (success or error) */}
      {submissionStatus && <p>{submissionStatus}</p>}
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        style={{ backgroundColor: "aliceblue", color: "black" }}
        >
          <div>
        <h2 style={{textAlign: 'center'}}>Connect</h2>
        <p>Connect with me here or subscribe to my blog</p>
          </div>
          <br/>
        <div className={styles.inputWrapper}>
          <input
            id="email"
            className={styles.inputField}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" 
          className={`${styles.labelField} 
          ${formData.email ? styles.holdLabel : ""}` } >Email</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputField}
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
          <label className={`${styles.labelField} ${formData.fname ? styles.holdLabel : ""}` }>First Name:</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputField}
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
          <label className={`${styles.labelField} ${formData.lname ? styles.holdLabel : ""}` }>Last Name:</label>
        </div>
        <div>
          <label className={`${styles.checkbox}`}>Subscribe to blogs </label>
          <input type="checkbox" name="emailSub" id=""/>
        </div>
        <div className={styles.inputWrapper}>
          <label className={`${styles.labelField}` }>{`Message (Optional)`}</label>
          <textarea
            className={styles.inputField + " " + styles.textarea}
            onChange={handleChange}
            name="message"
            value={formData.message}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
