import Bienvenida from "../../organisms/bienvenida";
import Header from "../../organisms/header";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  // Verifica si la ubicación actual es la raíz exacta
  const isBienvenidaVisible = location.pathname === "/home";

  return (
    <main className="bg-primary-1 h-screen">
      <Header />
      {isBienvenidaVisible && <Bienvenida />}
      <Outlet />
    </main>
  );
};

export default Home;
