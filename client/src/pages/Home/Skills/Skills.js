import React from 'react';
import SkillBadge from '../../../components/SkillBadge/SkillBadge'

const Skills = () => {
  // Replace this with your actual skills
  const skills = ['JavaScript', 'React', 'Node.js'];

  return (
    <div>
      <h1>My Skills</h1>
      {skills.map(skill => <SkillBadge skill={skill} />)}
    </div>
  );
};

export default Skills;