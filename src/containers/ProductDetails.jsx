import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction';
const ProductDetails = () => {
  const product = useSelector(state => state.procuct)
  const {image, title, price, category, describtion} = product
  const {productId} = useParams()
  console.log(productId);
  const dispatch = useDispatch()

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(e => console.log('Error ', e.message))
      console.log(response);
      dispatch(selectedProduct(response.data))
  }
  useEffect(()=> {
    if(productId && productId !== "") fetchProductDetail()
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])
  return (
    <div className='ui grid container'>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui vertical divider'>AND</div>
              <div className='middle aligned row'>
                <div className='column lp'>
                    <img src={image} alt={title}/>
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h2>
                    <a href="" className='ui teal tag label'>${price}</a>
                  </h2>
                  <h3 className='ui brown block header'>{category}</h3>
                  <p>{describtion}</p>
                  <div className='ui vertical animated button' tabIndex="0">
                      <div className='hidden content'>
                        <i className='shop icon'></i>
                      </div>
                      <div className='visible content'>Add to card</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default ProductDetails