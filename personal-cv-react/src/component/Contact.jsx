import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name}!`);
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea id="message" placeholder="Message" rows="4"></textarea>
        <button type="submit" id="submitBtn">Send</button>
      </form>
    </section>
  );
}

export default Contact;