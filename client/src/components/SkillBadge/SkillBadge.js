import React from 'react';
import { Badge } from 'react-bootstrap';

const SkillBadge = ({ skill }) => {
  return <Badge variant="primary">{skill}</Badge>;
};

export default SkillBadge;

