import React from "react";
import "../Header/Header.css"
import pic from "../../assest/images/pic-of-me.jpg"

function Header() {
  return (
    <div className="header">
      <h1>Scott Ray</h1>
      <img id="myself" src={pic} alt="pic of meself" />
    </div>
  );
}

export default Header;
