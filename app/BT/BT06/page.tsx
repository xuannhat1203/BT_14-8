import React from "react";
import images from "../../../public/logo.png";
import avatar from "../../../public/Avatar.png";
import Image from "next/image";
export default function page() {
  return (
    <div className="bt06">
      <div className="logo">
        <Image width={134} height={34} src={images} alt=""></Image>
      </div>
      <div className="center">
        <ul>
          <li>Home</li>
          <li>Updates</li>
          <li>Services</li>
          <li>Features</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="final">
        <Image width={50} height={50} src={avatar} alt=""></Image>
      </div>
    </div>
  );
}
