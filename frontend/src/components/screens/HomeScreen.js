import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productAction';
import Loader from '../Loader';
import Message from '../Message';

function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  console.log(productList)
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className='text-center'>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products && products.length > 0 ? (
            products.map((product) => (
              
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))
          ) : (
            <Message variant='info'>No products available</Message>
          )}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
