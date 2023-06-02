import { useState, useEffect } from "react";
import axios  from 'axios';
import { useParams } from 'react-router-dom';
import { Badge } from "antd";

export default function ProductView () {
   
    const [product, setProduct] = useState({});

    const params = useParams ();

    useEffect(() => {
        if (params?.slug) loadProduct();
    }, [params?.slug]);

    const loadProduct = async (req, res) => {
        try{
            const { data } = await axios.get (`/product/${params.slug}`)
            setProduct(data);
        }catch (err) {
            console.log(err);
        }
    };


    return (

        <div className='card mb-3 hoverable'>

            {/* the ribbons .. this was a real buggy mess for awhile */}
            <Badge.Ribbon text={`${product?.sold} sold`} color="red">
                <Badge.Ribbon
                    text={`${product?.quantity >= 1
                        ? `${product?.quantity - product?.sold} in stock`
                        : "Out of stock" }`}
                    placement="start"
                    color="green">

                    <img className="card-img-top"
                        src={`${process.env.REACT_APP_API}/product/photo/${product._id}`}
                        alt={product.name}
                        style={{ height: "300px", objectFit: "cover" }}/>
                </Badge.Ribbon>
            </Badge.Ribbon>

            <div className='card-body'>
                <h5>{product?.name}</h5>

                <h4 className='fw-bold'>
                {product?.price?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    })}
                </h4>

                <p className='card-text'>{product?.description}</p>
            </div>                
                <button 
                className='btn btn-outline-primary col card-button'
                style={{ borderBottomRightRadius: "5px"}}
                >Add to Cart</button>                      
         </div>
    );
}