import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';
import ReactSearchBox from 'react-search-box';
// import Path from './Path.png'
import top from './top.png'
const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container md">
         <Link to='/' className="brand-logo" img src={top} width="100" height="100"  >My recruitment</Link>
       {/* <p className="brand-logo"><img src={top} width="100" height="100" /></p> */}
        {/* <img src={top} width="100" height="100"  /> */}
        {/* <Link to='/' className="brand-logo">Job Search</Link> */}
      
        
        {links}
        </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
