import React, { Component } from 'react';
import './App.css';


class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this)
    }

    onDelete() {
        const {  name } = this.props;

        this.props.onDelete(this.props.name)
    
    }
    
  render() {
      const { name, price, onDelete } = this.props
    return (
      <div className="ProductItem">
              <div key={name}>
                <span>{name}</span>{` | `}<span>{price}</span>
                {` | `}
                <button onClick={this.onDelete}>Delete</button>
              </div>
      </div>
    );
  }
}

export default ProductItem;
