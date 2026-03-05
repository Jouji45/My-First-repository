import React from "react";
import myPhoto from "../assets/image/imagesplaceholder.jpg";
import Card from "./Card";

function About() {
  return (
    <section className="card">
      <div style={{ textAlign: "center" }}>
        <Card title="About Me">
          <p>This is my personal profile.</p>
          <p>My name is John and I do some repairs and some side hustles.</p>
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
        </Card>
      </div>
    </section>
  );
}

export default About;