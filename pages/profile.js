import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <p>Memuat data pengguna...</p>;

  return (
    <div className="container">
      <h1>Profil Pengguna</h1>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Peran: {user.role}</p>
    </div>
  );
}
