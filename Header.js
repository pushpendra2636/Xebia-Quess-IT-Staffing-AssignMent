import React from 'react';
// import logo '../images/logo.png';


class Header extends React.Component {
   render() {
      return (
         <div className="header">
          <div className="logo">
           <img src={require('../images/logo.png')}  alt="logo"/>
          </div>
          <div className="fllter">
             <input type="text" className="searchInput" placeholder="Search Products"/>
          </div>
          <div className="admin">
            <img src={require('../images/user.png')}  alt="user"/>
           </div>
         </div>
      )
   }
}
export default Header