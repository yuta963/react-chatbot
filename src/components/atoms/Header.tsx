import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-blue-900 text-white py-3">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
    </header>
  );
};

export default Header;
