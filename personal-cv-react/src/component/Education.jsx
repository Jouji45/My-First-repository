import React, { useState } from "react";
import Card from "./Card";

function Education({ education }) {
  const educationData = [
    { program: "College", school: "USTP - CDO Campus", year: "2024" },
    { program: "College", school: "COC", year: "2022" },
    { program: "Senior Highschool", school: "ONSTS", year: "2021" },
    { program: "Highschool", school: "Riverdale - Barra Opol Campus", year: "2019" },
  ];

  return (
    <section className="card">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Program</th>
            <th>Institution</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.program}</td>
              <td>{item.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;