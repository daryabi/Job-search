import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import index from './index.css'
// import {moment} fr om 'moment';
import Path from './Path.png'
import Shape from './Shape.png'


const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container section project-details">
        <div className="contianer"></div>
        <div className="card z-depth-0">
          <div className="card-content">
            
            <h1><span className="card-title">{project.title}</span></h1>
            <p><img src={Shape} width="10" height="15" /> {project.company}</p>
            <p><img src={Shape} width="10" height="15" /> {project.Salary}</p>
            <p><img src={Shape} width="10" height="15" /> {project.Location}</p>
            <div className="card-actio-right" >
            <p><img src={Shape} width="10" height="15" /> {project.JobType} </p>
            {/* <p></p> */}
            </div>
            <div className="card-action white lighten-4 black-text">
            <h4><p>Requirement</p></h4>
            <p><li>{project.Requirement}</li></p>
            </div>
            <div className="card-action white lighten-4 black-text">
              <h4><p>Responsibilities</p></h4>
            <p><li>{project.Responsibilities}</li></p>
            </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            {/* <div>{moment(project.createdAt.toDate()).calender()}</div> */}

            <div> {moment(project.createdAt.toDate()).calendar()}</div>
            <div className="left">
        <p><img src={Path} width="10" height="15" />Save</p>
        </div>
        <div className="right">
       <p><img src={Shape} width="10" height="15" />Apply </p>
        </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
