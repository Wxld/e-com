import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUS } from '../store/productSlice';
import { useSelector } from 'react-redux/es/exports';


const Products = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.product);
    
    useEffect(() => {
        dispatch(fetchProducts());

        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();

    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if(status === STATUS.LOADING) {
        return <h2>Loading...</h2>
    }

    if(status === STATUS.ERROR) {
        return <h2>Oops! Something went wrong.</h2>
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() => handleAdd(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;