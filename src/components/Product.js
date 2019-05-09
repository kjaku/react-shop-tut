import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { id, title, img, price, inCart, company } = this.props.product;
    return (
      <ProductWrapper className="col-6 mx-auto col-sm-6 col-md-4 col-lg-3 my-3">
        <div className="card product-card">
          <ProductConsumer>
            {value => (
              <div>
                <div
                  className=" img-container "
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                </div>

                <div className="card-footer  ">
                  <h6 className=" card-title font-weight-bold mb-0">{title}</h6>
                  <div className="mb-4 pb-1 text-black-50 align-self-center ">
                    {company}
                  </div>
                  {/* <div className="mt-2 ">{short}</div> */}
                  <div className="">
                    <div
                      className="text-right cart-btn "
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                          {' '}
                          W koszyku
                        </p>
                      ) : (
                        <span>
                          <i className="fas fa-cart-plus mr-1" />
                          {price}
                          <span className="ml-1"> zł</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.2s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.2s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
    }
    /* .card-footer {
      background: rgba(247, 247, 247);
    } */
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.05s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.05);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    color: var(--mainCol);
    /* border: solid orange; */
    background: var(--mainWhite);
    /* color: orange; */
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    /* transform: translate(100%, 100%); */
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 0.05s linear;
  }
  .cart-btn:hover {
    background: var(--mainYellow);
    cursor: pointer;
  }

  .category {
    position: absolute;
    text-align: center;
    margin-top: 40px;
    margin-left: 20px;
    /* color: white; */
    /* background: #232528; */
    font-weight: bold;
  }

  .product-card {
    position: relative;
    /* border: solid black; */
  }
`;
export default Product;
