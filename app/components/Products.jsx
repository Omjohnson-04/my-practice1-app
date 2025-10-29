'use client';

export default function Product({name, price}) {
    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    );
}