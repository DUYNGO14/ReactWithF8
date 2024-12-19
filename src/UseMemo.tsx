import { useState,useMemo, useRef } from "react";
//usemeo : giúp tránh thực hiện lại một đoạn logic không cần thiết
function UseMemo1() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();
    const handleAddProduct = () => {
        setProducts([...products, { 
            name, 
            price : +price
        }])
        setName('');
        setPrice('');

        nameRef.current.focus();
    }

    const total = useMemo(() => {
        return products.reduce((total, product) =>
             total + product.price, 0)
    }, [products])

    return (
        <div className="p-8">
            <input 
                ref={nameRef}
                className="border border-black rounded " 
                value={name}
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)} 
            />
            <br/>
            <input 
                className="border border-black rounded "  
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                placeholder="Product Price"
            />
            <br />
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-600" onClick={handleAddProduct}>Add Product</button>
            <br />
            <h1>Total: {total}</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )

}

export default UseMemo1