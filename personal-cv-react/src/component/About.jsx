import React from "react";
import myPhoto from "../assets/image/imagesplaceholder.jpg";

function About() {
  return (
    <section className="card">
      <div style={{ textAlign: "center" }}>
        <h2>About Me</h2>
        
        <img 
          src={myPhoto} 
          alt="John Benedict Acebido" 
          style={{ 
            width: "180px", 
            height: "180px", 
            borderRadius: "50%", 
            border: "4px solid #3b82f6",
            marginBottom: "15px",
            objectFit: "cover"
          }} 
        />
        
        <p>My name is John and I do some repairs and some side hustles.</p>
      </div>
    </section>
  );
}

export default About;