import store from '../../redux/store';
import { getProducts } from '../../redux/actions/productsActions'
const productRestApi = "https://fakestoreapi.com/products";

// export function getProductsdata() {
//   productRestApi.get().then(function({data}) {
//   	console.log("in get products",data)
//     store.dispatch(getProducts(data));
//   }).catch(function (error) {
//     console.log("Get products failed: " + error);
//   });
// }
export const getProductsdata = async () => {
  await fetch('https://fakestoreapi.com/products').then(function (res) {
    return res.json();
  }).then(function (json) {
    console.log(json)
    store.dispatch(getProducts(json));
  });
};