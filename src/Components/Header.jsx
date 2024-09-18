import React from "react";
import trollface from "../assets/trollface.png";
function Header() {
  return (
    <div className="mx-auto flex w-[550px] h-[65px] bg-gradient-to-r from-[#711F8D] to-[#A818DA] items-center justify-between content-center px-4">
      <div className="flex items-center gap-2 text-white ">
        <img src={trollface} alt="" className="w-[30px] h-[25px]" />{" "}
        <h1>Meme Generator</h1>
      </div>
      <h1 className="text-white text-sm">React Course - Project 3</h1>
    </div>
  );
}

export default Header;
