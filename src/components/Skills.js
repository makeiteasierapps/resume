import React, { useState } from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import "../styles/Skills.css";

const Skills = () => {
  const [skills] = useState([
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
  ]);

  return (
    <Container id="skills">
      <Row>
        <Col>
          <h2>Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <label>{skill.name}</label>
              <Progress value={skill.level}>
                <span className="skill-level">{skill.level}%</span>
              </Progress>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
