'use client';

const products = [
    {id: 1, name: 'Laptop', price: 1200},
    {id: 2, name: 'Headphones', price: 150},
    {id: 3, name: 'Phone', price: 800},
];
export default function ProductList(name, price) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.name} - {p.price}</li>
                ))}
            </ul>
        </div>
    );
}