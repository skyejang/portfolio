import React, { useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute cursor-pointer top-9 right-9 z-[888] font-russo menu-btn"
      >
        MENU
      </button>
      <Nav showMenu={isOpen} onClose={() => setIsOpen(false)} />
      <Outlet />
    </>
  );
};

export default Layout;
