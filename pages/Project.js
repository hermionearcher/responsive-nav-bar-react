import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data/projectsData';

const Project = () => {
  return (
    <div className="project grid">
      {projects.map((project, index) => {
        return <p key={index}>{project.title}</p>;
      })}
    </div>
  );
};

export default Project;
