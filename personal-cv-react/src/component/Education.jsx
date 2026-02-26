import React, { useState } from "react";
function Education() {
  const educationData = [
    { program: "College", school: "USTP - CDO Campus", year: "2024" },
    { program: "College", school: "COC", year: "2022" },
    { program: "Senior Highschool", school: "ONSTS", year: "2021" },
    { program: "Highschool", school: "Riverdale - Barra Opol Campus", year: "2019" },
  ];

  return (
    <section className="table card">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Program</th>
            <th>Institution</th>
            <th>Year Graduated</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((item, index) => (
            <tr key={index}>
              <td>{item.program}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;