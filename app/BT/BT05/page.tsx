import Image from "next/image";
import React from "react";
import linkImage from "../../../public/traffic-sign-160659_1280.png";
export default function page() {
  return (
    <div className="container">
      <div className="main">
        <Image width={40} height={40} src={linkImage} alt=""></Image>
        <h5>Delete Blog Post</h5>
        <p>Are you sure you want to delete this post?</p>
        <p>This action cannot be undone.</p>
        <div className="btn">
          <button className="cancel">Cancel</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
}
