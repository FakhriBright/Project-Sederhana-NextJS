import { products } from "../../data/products";

export async function getStaticPaths() {
  const paths = products.map((p) => ({ params: { id: p.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  return { props: { product } };
}

export default function ProductDetail({ product }) {
  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Harga: Rp{product.price.toLocaleString()}</p>
      <a href="/products">← Kembali</a>
    </div>
  );
}
