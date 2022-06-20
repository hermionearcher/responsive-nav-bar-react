import { Link } from 'react-router-dom';
import React from 'react';
import { projects } from '../data/projectsData';

const Project = () => {
  return (
    <div className="projectRow">
      {projects.map((project, index) => {
        return (
          <div className="projectSingle">
            <Link className="projectSingleLink" to={`projects/${project.id}`}>
              <img src={project.image}/>
              <p key={index}>{project.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
