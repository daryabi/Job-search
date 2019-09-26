import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    // content: '',
    company: '',
    Requirement:'',
    Responsibilities:'',
    Salary:'',
    Location:'',
    JobType:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
              <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
              <input type="text" id='company' onChange={this.handleChange} />
            <label htmlFor="title">Company Name</label>
          </div>
          <div className="input-field">
              <input type="text" id='Salary' onChange={this.handleChange} />
            <label htmlFor="title">Salary</label>
          </div>
          
          <div className="input-field">
            <textarea id="Responsibilities" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Responsibilities</label>
          </div>
          <div className="input-field">
            <textarea id="Requirement" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Requirement</label>
          </div>
          <div className="input-field">
            <textarea id="Location" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Location</label>
          </div>
          <div className="input-field">
            <textarea id="JobType" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Type of Job</label>
          </div>
          
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
