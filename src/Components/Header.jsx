import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      title: "Platform",
    },
    {
      id: 2,
      title: "Company",
    },
    {
      id: 3,
      title: "Solutions",
    },
    {
      id: 4,
      title: "Partners",
    },
    {
      id: 5,
      title: "Pricing",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center shadow-md p-3">
      <img src="/logo.png" alt="logo" className="h-16 cursor-pointer select-none"  onClick={() => navigate('/')}/>
      <div className="effects items-center gap-4 hidden md:flex cursor-pointer">
        {menuItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
        <button className="outline px-3 py-2 rounded-2xl hover:bg-primary hover:text-white">
          Admin Login
        </button>
      </div>
      <div className="text-3xl md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {" "}
          {isMenuOpen ? <MdOutlineMenu /> : <RxCross2 />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="top-0 right-0 px-10">
          {menuItems.map((items) => (
            <div key={items.id}>{items.title}</div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
