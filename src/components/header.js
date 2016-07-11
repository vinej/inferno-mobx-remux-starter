import Inferno from 'inferno';
import React from 'react'
import { observer } from "mobx-react";
import { Link } from 'inferno-router'

@observer
export default class Header extends React.Component {
  renderSignInUp(authenticated) {
    if (authenticated === false) {
      return [ <span key='1'><Link to='/signin' >SignIn</Link></span>,
               <span key='2'><Link to='/signup' >SignUp</Link></span> ]
    } else {
      return [ <span key='4'><Link to='/todos' >Todos</Link></span>,
               <span key='3'><Link to='/signout' >SignOut</Link></span> ]
    }
  }

  render() {
    const store = this.props.store
    return (
      <div className="pure-g header">
          <div className="pure-u-1-4">
            <div>ReMux</div>
          </div>
          <div className="pure-u-3-4" >
            <span key='5'><Link to='/welcome' >Welcome</Link></span>
            { this.renderSignInUp(store.isAuthenticated()) }
            <div
                onClick= { () => alert('ReMux example : https://github.com/vinej/react-portal') } 
                style={{float: 'right'}}>?</div>
          </div>
     </div>
    )
  }
}
