import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-4">
      <h2 className="">WeatherNow</h2>
      <span>
        <Link href={"/favorites"} className="text-decoration-none text-dark">
          Favorites
        </Link>
      </span>
    </header>
  );
};

export default Header;
