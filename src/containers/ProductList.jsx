import React, {useEffect} from 'react';
import axios from 'axios';
import { setProduct } from '../redux/actions/productAction';   //
import { useDispatch, useSelector } from 'react-redux'
import ProductComponents from './ProductComponents';

const ProductList = () => {
    const products = useSelector(state => state)
    console.log(products);
    const dispatch = useDispatch()

    const  fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      .catch(e => console.log("ERROR", e.message))
      console.log(response.data);
      dispatch(setProduct(response.data))                        //reduserga yuboradi
    }


    useEffect( () => {
      fetchProducts()
    },[])
  return (
    <div className='ui grid container'>
        <ProductComponents/>
    </div>
  )
}

export default ProductList