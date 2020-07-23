import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';

class Dashbord extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}
export default Dashbord;
