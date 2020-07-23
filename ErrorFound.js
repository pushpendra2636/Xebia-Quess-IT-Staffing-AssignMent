import React from 'react';

class ErrorFound extends React.Component {
   render() {
      return (
         <div className="pageNotFound">
           <h1> Please Enter valid URL Name</h1>
           <img src={require('../images/sorry.jpg')}  alt="logo"/>
         
         </div>
      )
   }
}
export default ErrorFound