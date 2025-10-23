import { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="container">
      <h1>Daftar Produk</h1>
      <ul className="product-list">
        {products.map((p) => (
          <li key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>Rp{p.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
  