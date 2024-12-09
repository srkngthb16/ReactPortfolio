import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section_title">Yeteneler</h2>
            <span className="section_subtitle">Teknik Kapasitem</span>

            <div className="skills_container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
};

export default Skills;