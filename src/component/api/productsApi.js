import store from '../../redux/store';
import {getProductSuccess} from '../../redux/actions/productsActions'
// import _ from 'lodash';

const productRestApi = "https://fakestoreapi.com/products";

export function getProducts() {
  productRestApi.get().then(function({data}) {
  	console.log("in get products",data)
    store.dispatch(getProductSuccess(data));
  }).catch(function (error) {
    console.log("Get products failed: " + error);
  });
}