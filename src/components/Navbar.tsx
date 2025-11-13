import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import { navLinks } from "../services/navLinks";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="flex justify-around">
          <a href="">
            <Link to="/">
              <span>Racing Statition</span>
            </Link>
          </a>
          <ul className="flex gap-12">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={`/${link.path}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
