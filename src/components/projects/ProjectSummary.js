import React from 'react';
import moment from 'moment';
import ReactSearchBox from 'react-search-box';
// import Path from '../../assist/Path';
import Path from './Path.png'
import Shape from './Shape.png'
const ProjectSummary = ({project}) => {
  return (
  <div className="card z-depth-0 project-summary">
      <div className="header"  ></div>
      
      <div className="card-content grey-text text-darken-3">    
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <div className="left">
        <p><img src={Path} width="10" height="15" /> Save</p>
        </div>
        <div className="right">
       <p><img src={Shape} width="10" height="15" /> Apply </p>
        </div>
        </div>
    </div>
  
  )
}

export default ProjectSummary
