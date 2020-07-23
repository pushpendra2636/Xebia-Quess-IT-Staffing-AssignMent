import React from 'react';
import {Redirect} from 'react-router';
import ProductService from '../services/ProductService.js';

class Login extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      redirect: false,
      url: null,
      username: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind (this);
    this.handleChange = this.handleChange.bind (this);
  }

  async handleLogin (event) {
    console.log ('navigation');
    event.preventDefault ();
    let userObj = {};
    userObj.username = this.state.username;
    userObj.password = this.state.password;
    try {
      const userDetails = await ProductService.doLogin (userObj);
      alert (userDetails);
      setTimeout (() => {
        this.setState ({redirect: true, url: '/Dashbord'});
      }, 1000);
    } catch (error) {
      console.error (error);
    }
  }

  handleChange (e) {
    this.setState ({[e.target.name]: e.target.value});
    console.log (this.state);
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={this.state.url} />;
    } else {
      return (
        <div className="bg-img">
          <div className="loginCard">
            <form
              className="loginForm"
              id="formLogin"
              onSubmit={this.handleLogin}
              encType="application/x-www-form-urlencoded"
            >
              <h2 className="sCard">sCard </h2>
              <div className="group">
                <input
                  type="text"
                  name="username"
                  className="form-Control"
                  onChange={this.handleChange}
                  placeholder="Username"
                  required="required"
                />
              </div>
              <div className="group">
                <input
                  type="password"
                  name="password"
                  className="form-Control"
                  onChange={this.handleChange}
                  placeholder="Password"
                  required="required"
                />
              </div>
              <button type="submit" className="loginBtn">Login</button>
            </form>
          </div>
        </div>
      );
    }
  }
}
export default Login;
