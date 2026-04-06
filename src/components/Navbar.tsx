import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Studio", path: "/studio" },
  { label: "About", path: "/about" },
  { label: "Journal", path: "/journal" },
  { label: "Reach Us", path: "/reach-us" },
];

const DISPLAY_FONT = "'Instrument Serif', serif";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <Link
        to="/"
        className="text-3xl tracking-tight text-foreground"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        Velorah<sup className="text-xs">®</sup>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`text-sm transition-colors ${
              pathname === link.path
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        to="/reach-us"
        className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
      >
        Begin Journey
      </Link>
    </nav>
  );
};

export default Navbar;
