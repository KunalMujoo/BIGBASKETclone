import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

    function ProductScreen(props) {
        const [Qty, setQty] = useState(1);
        const productDetails = useSelector(state => state.productDetails);
        const { product, loading, error} = productDetails;
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(detailsProduct(props.match.params.id));
            return () => {

            };
        }, [])

        const handleAddToCart = () => {
            props.history.push("/cart/" + props.match.params.id + "?qty=" + Qty);
        }


        return <div>
            <div className="back-to-result">
                <Link to = "/">Back to result</Link>
            </div>
            
            {loading? <div>Loading...</div>:
            error? <div>{error}</div>:
            (
                <div className = "details">
                <h1>{product.name}</h1>
                <div className = "details-image">
                    <img src = {product.image} alt="product" height="500" width="500"></img>
                </div>
                <div className = "details-info">
                   <ul>
                       <li>
                           <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.category}
                        </li>
                        <li>
                            Rs.<b>{product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
        

            <div className="details-action">
                <ul>
                    <li>
                        Price : Rs.{product.price}
                    </li>
                    <li>
                        Status : {product.status}
                    </li>
                    <li>
                        Qty : <select value = {Qty} onChange = {(e)=> {setQty(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map(x=>
                                <option key={x+1} value = {x+1}>{x+1}</option>
                                )}
                        </select>
                    </li>
                    <li>
                    {product.countInStock>0? <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                        :
                        <div>Out of Stock</div> }
                    </li>
                </ul>
            </div>
        </div>
            )
            }

            
        </div>
    }
export default ProductScreen;