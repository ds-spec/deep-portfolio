import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex gap-5 items-center">
      {["[h] home", "[w] work", "[b] blog", "[p] projects", "[r] resume"]?.map(
        (item) => (
          <a
            href={`/${item}`}
            className="text-white font-mono text-xs cursor-pointer hover:text-[#70D935] transition-all"
          >
            {item}
          </a>
        )
      )}
    </div>
  );
};

export default Navbar;
