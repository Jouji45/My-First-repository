import React, { useState } from "react";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" required />
        <input type="email" id="email" placeholder="Email" required />
        {/* Changed type="message" to a textarea for better UX */}
        <textarea id="message" placeholder="Message" rows="4"></textarea>
        <button type="submit" id="submitBtn">Send</button>
      </form>
    </section>
  );
}

export default Contact;