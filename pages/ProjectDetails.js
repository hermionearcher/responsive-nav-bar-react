import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="project-details">
      <Link to="/projects"><p>Back</p></Link>
      <h2>project details - { id }</h2>
    </div>
  );
};

export default ProjectDetails;
