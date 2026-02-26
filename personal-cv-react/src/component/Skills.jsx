import React, { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);

    return (
        <section className="card" id="skillsSection">
            {/* 1. Add the onClick event to toggle the state */}
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Hide Skills" : "Show Skills"}
            </button>
            
            <h2>Skills</h2>

            {/* 2. Use the 'visible' variable to show/hide the list */}
            {visible && (
                <ul>
                    <li>Repair things</li>
                    <li>Animation</li>
                    <li>
                        Web Technologies
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Git</li>
                        </ul>
                    </li>
                </ul>
            )}
        </section>
    );
}

export default Skills;