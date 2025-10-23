export async function getStaticProps() {
  return { props: { message: "Selamat datang di katalog produk sederhana!" } };
}

export default function Home({ message }) {
  return (
    <div className="container">
      <h1>{message}</h1>
      <p>Project ini menggunakan berbagai metode rendering di Next.js.</p>
      <ul>
        <li><a href="/products">Daftar Produk (SSR)</a></li>
        <li><a href="/profile">Profil Pengguna (CSR)</a></li>
      </ul>
    </div>
  );
}
