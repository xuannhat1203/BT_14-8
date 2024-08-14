import React from "react";

export default function Page() {
  return (
    <div>
      <label className="block">Label</label>
      <br />
      <div className="relative">
        <input
          className="border border-blue-500 w-[230px] h-[30px] pl-2 focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="Placeholder"
        />
        <i
          style={{ position: "relative", right: "25px" }}
          className="fa-solid fa-eye"
        ></i>
      </div>
      <p className="text-gray-500 mt-2">Helper Text</p>
    </div>
  );
}
