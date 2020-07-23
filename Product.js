import React from 'react';
import Async from 'react-async';

const productsList = () =>
  fetch ('https://xebiascart.herokuapp.com/products')
    .then (res => (res.ok ? res : Promise.reject (res)))
    .then (res => res.json ());

function Product () {
  return (
    <div className="p-container">
      <div className="filterCard">

        <div className="f-color">
          <p>Color</p>
          C1 : <input type="checkbox" />
          C2 :<input type="checkbox" />
          C3 :<input type="checkbox" />
          C4 : <input type="checkbox" />
        </div>
        <div className="f-brand">
          <p>Brand</p>
          B1 : <input type="checkbox" />
          B2 :<input type="checkbox" />
          B3 :<input type="checkbox" />
          B4 : <input type="checkbox" />
        </div>
        <div className="f-price">
          <p>Price</p>
        </div>
        <div className="f-discount">
          <p>Discount</p>
        </div>
      </div>
      <div className="products">
        <Async promiseFn={productsList}>
          {({data, err, isLoading}) => {
            if (isLoading) return 'Loading...';
            if (err) return `Something went wrong: ${err.message}`;

            if (data)
              return (
                <div className="card">

                  {data.map (product => (
                    <div key={product.title}>
                      <img src={product.image} />
                      <span className="discount">
                        {product.discount}<span>&#37;Off</span>
                      </span>
                      <p className="p-Info">
                        <span className="brand">
                          color:<input type="checkbox" /> {product.color}
                        </span>
                        <span className="brand">Brand : {product.brand}</span>
                        <span className="brand">
                          price : {product.price.mrp}
                        </span>
                      </p>
                      <div className="addCard">
                        <img
                          className="addBtnImg"
                          src={require ('../images/add.jpg')}
                          alt="add"
                        />
                        <button className="addBtn"> Add</button>
                      </div>
                    </div>
                  ))}
                </div>
              );
          }}
        </Async>
      </div>
    </div>
  );
}
export default Product;
