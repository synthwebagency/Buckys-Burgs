/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-tx-white text-tx-ink border-b-4 border-tx-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-tx-blue [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"></div>
              <span className="font-display text-2xl tracking-tight uppercase text-tx-red">
                Bucky's Burgs
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-display text-sm uppercase tracking-widest hover:text-tx-red transition-colors duration-200 ${location.pathname === link.href ? 'text-tx-red border-b-2 border-tx-red' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/menu" className="bg-tx-red text-tx-white px-6 py-2 font-display uppercase tracking-wider hover:bg-tx-blue transition-all duration-300">
                Order Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-tx-ink hover:text-tx-red focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-tx-white border-t border-tx-ink/30"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-base font-display uppercase tracking-widest hover:bg-tx-red transition-colors ${location.pathname === link.href ? 'bg-tx-cream text-tx-red' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-3 py-4">
            <Link to="/menu" onClick={() => setIsOpen(false)} className="block w-full text-center bg-tx-red text-tx-white px-6 py-3 font-display uppercase tracking-wider">
              Order Now
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
