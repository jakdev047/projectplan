import React from 'react';
import SingleProject from './SingleProject';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {
        projects.map(project=>{
          return <SingleProject key={project.id} project={project}/>
        })
      }
    </div>
  );
};

export default ProjectList;