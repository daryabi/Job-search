import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';
import ReactSearchBox from 'react-search-box';



const SignedInLinks = (props) => {
  
   
  return (
    <div>
      <nav  >
        
      <ul className="right">
      
      <br></br>
      
        <li><NavLink to='/create'>New Project</NavLink></li>
        
        <li><a onClick={props.signOut}>Log Out</a></li>
        
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
          
        </NavLink></li>
      </ul>
      
      </nav>
      {/* <div class="topnav" > */}
        <div className="left">
          <ReactSearchBox className="left"
        placeholder="Job Title, Company..."
        value="Doe"
        // data={this.data}
        
      />   
      </div>
      <div className="left">
        <div className="nm">
          <ReactSearchBox className="left"
        placeholder="Location."
     
       
      />   
      </div>
      </div>
      <div className="left">
          <ReactSearchBox className="left"
        placeholder="salary.."
        
       
      />   
      </div>
      
      </div>
    // </div>
    
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    // search1: () => dispatch(search1())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)


