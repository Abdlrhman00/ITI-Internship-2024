import React from "react";
import './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className="container mt-5">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me using the form below or connect with me on LinkedIn and GitHub.</p>
      
      <div className="row">
        <div className="col-md-6">
          <form
            action="mailto:your-email@example.com" // Replace with your email address
            method="post"
            encType="text/plain"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
        
        <div className="col-md-6">
          <h3>Connect with Me</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/material-outlined/24/000000/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="https://github.com/Abdlrhman00" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="GitHub" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;