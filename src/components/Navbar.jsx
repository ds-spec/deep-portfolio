import React from "react";

const Navbar = () => {
  const navItems = [
    "[h] home",
    "[w] work",
    "[∞] game",
    "[p] projects",
    "[r] resume",
  ];

  return (
    <div className="w-full h-20 flex gap-5 items-center">
      {navItems.map((item) => {
        // Extract just the name after the closing bracket
        const label = item.replace(/\[.*\]\s*/, "").toLowerCase();
        return (
          <a
            key={label}
            href={`/${label === "home" ? "" : label}`}
            className="text-white font-mono text-xs cursor-pointer hover:text-[#70D935] transition-all"
          >
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
