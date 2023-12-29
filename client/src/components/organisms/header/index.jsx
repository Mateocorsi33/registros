import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logos from "../../molecules/Logos/index.jsx";

function NavHeader({ text, route, isActive, onClick }) {
  return (
    <li className="mt-6 w-1/2">
      <NavLink
        to={route}
        exact
        className={`w-full group focus:outline-none inline-block px-2 pt-3 pb-2 mb-6 text-center font-bebasneue text-2xl transition duration-300 ease-in-out
          ${isActive ? 'bg-secondary-1 text-black' : 'bg-secondary-2 text-white'} 
          ${text === "Ingresos" ? 'rounded-l-full' : 'rounded-r-full'}
          ${text === "Ingresos" ? 'rounded-l-lg' : 'rounded-r-lg'}
          hover:bg-secondary-2 hover:text-secondary-1`}
        onClick={() => onClick(route)}
      >
        {text}
      </NavLink>
    </li>
  );
}

function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Detecta el cambio en la ubicación y actualiza el enlace activo basándose en la ruta actual
    const currentLink = items.find((item) => location.pathname.startsWith(item.route));
    setActiveLink(currentLink ? currentLink.route : null);
  }, [location.pathname]);

  const items = [
    {
      text: "Ingresos",
      route: "ingresos",
    },
    {
      text: "Registros",
      route: "registros",
    },
  ];

  const handleNavLinkClick = (route) => {
    setActiveLink(route);
  };

  const renderNavItems = () => {
    return items.map((item) => (
      <NavHeader
        key={item.route}
        text={item.text}
        route={item.route}
        isActive={activeLink === item.route}
        onClick={handleNavLinkClick}
      />
    ));
  };

  return (
    <div className="p-5">
      <Logos />
      <nav>
        <ul className={`list-none flex gap-0 items-center justify-center flex-wrap lg:justify-center`}>
          {renderNavItems()}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
