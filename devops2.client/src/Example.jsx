import { useState, useEffect } from 'react';

const ProductsDisplay = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/Products')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // For debugging
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Products</h2>
            {products.length === 0 ? (
                <p>Loading products...</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2 text-left">ID</th>
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Price</th>
                            <th className="border p-2 text-left">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.idProduct}>
                                <td className="border p-2">{product.idProduct}</td>
                                <td className="border p-2">{product.name}</td>
                                <td className="border p-2">${product.price}</td>
                                <td className="border p-2">{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProductsDisplay;