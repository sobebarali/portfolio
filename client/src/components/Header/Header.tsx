import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-gray-50 p-3">
        <div className="flex justify-center items-center">
          <a
            className="font-bold text-3xl text-center text-gray-800 hover:text-gray-600 transition-colors"
            href="/"
          >
            SOBEBAR ALI
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
