import React, { Component } from 'react';
import { ProductConsumer } from '../context.js';
import { ButtonContainer } from './Button';

class KoszykButton extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cartSubtotal } = value;
          return (
            <ButtonContainer>
              {/* <KoszykWrapper> */}
              <span className="mr-1">
                <i className="fas fa-cart-plus" />
              </span>
              koszyk
              <span className="text-main accent ml-1">
                ({cartSubtotal}
                <span className="ml-1">zł</span>){' '}
              </span>
              {/* </KoszykWrapper> */}
            </ButtonContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

// const KoszykWrapper = styled.button`
//   background: var(--mainCol) !important;
//   font-size: 12px;
// `;

export default KoszykButton;
