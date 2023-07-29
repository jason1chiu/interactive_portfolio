import React from "react";
import * as DiIcons from "react-icons/di";

const SkillBadge = ({ skill }) => {
  const { name, iconClassName } = skill;  // extract name and iconClassName from skill
  
  // Check if the icon exists in DiIcons
  if (Object.prototype.hasOwnProperty.call(DiIcons, iconClassName)) {
    // If the icon exists, render it
    const Icon = DiIcons[iconClassName];
    return (
      <div style={{ textAlign: 'center' }}>
        <Icon size={60} color="#5D93FF" />
        <div>{name}</div>
      </div>
    );
  } else {
    // If the icon doesn't exist, render a default icon or nothing
    return null;
  }
};

export default SkillBadge;
