export default function handler(req, res) {
  const products = [
    { id: 1, name: 'Kopi Nusantara', price: 15000, image: '/images/kopi.png' },
    { id: 2, name: 'Teh Melati', price: 10000, image: '/images/teh.png' },
    { id: 3, name: 'Susu Jahe', price: 12000, image: '/images/susu.png' },
  ]
  res.status(200).json(products)
}
