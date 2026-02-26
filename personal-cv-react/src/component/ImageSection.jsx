import React from "react";
import cvImage from "../assets/image/imagesplaceholder.jpg";

function ImageSection() {
  return (
    <section className="card"> {/* Changed 'class' to 'className' */}
      <h2>Image Example</h2>
      {/* 2. Use the imported variable in the src attribute */}
      <img 
        src={cvImage} 
        alt="A descriptive text about the image for accessibility" 
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
    </section>
  );
}

export default ImageSection;