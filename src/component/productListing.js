import { getProducts } from './api/productsApi';
import React, {Component} from 'react';
import {connect} from 'react-redux';


export const Product =(products)=>{
	console.log(products);

	// return(
	// 	<div class="aem-Grid aem-Grid--12">
 //            </div>
 //                {products?.map((product) => {
 //                    return (
                    
 //                            <div className="col-md-4 col-sm-6 col-6">
 //                                <div className=" " key={product.id}>
 //                                    < NavLink to={`/products/${product.id}`}>
 //                                        <img src={product.image} className="card-img-top" alt={product.title}  /></NavLink>
 //                                    <div className="card-body">
 //                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
 //                                        <p className="card-text lead fw-bold">${product.price}</p>
 //                                        <img src={heart} />
 //                                    </div>
 //                                </div>
 //                            </div>
 //                    )
 //                })}
 //                <div class="aem-Grid aem-Grid--12">
 //                    <div class="aem-GridColumn aem-GridColumn--default--5">
 //                        &nbsp;
 //                    </div>
 //                    <div class="aem-GridColumn aem-GridColumn--default--2 paginationone">
 //                    </div>
 //                    <div class="aem-GridColumn aem-GridColumn--default--5">
 //                        &nbsp;
 //                    </div>
 //                </div>
 //                )
}
class ProductListing extends Component{
	componentDidMount() {
    if (!this.props.products)
      this.refreshSites();
   
  }
  refreshSites(){
    getProducts();
  }
  render() {
    return (
      <div>
            {this.props.products &&
            <Product products={this.props.products}/>
            }
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    sites: store.productState.products
  };
};

export default connect(mapStateToProps)(ProductListing);