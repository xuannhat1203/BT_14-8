import React from "react";

export default function Page() {
  return (
    <div className="space-y-6">
      <label className="block text-lg font-semibold text-gray-700">
        Label Input
      </label>
      <div className="border border-blue-500 w-[370px] h-[40px] flex items-center rounded-md shadow-sm bg-white">
        <i className="fa-solid fa-clock text-blue-500 ml-3"></i>
        <input
          className="w-full h-full pl-2 focus:border-blue-500 focus:outline-none border-none rounded-md"
          type="text"
        />
        <i className="fa-solid fa-chevron-up text-gray-400 mr-3"></i>
      </div>
      <div className="border border-blue-500 w-[370px] h-[225px] flex flex-col items-center justify-evenly rounded-md shadow-md bg-white p-4 gap-3">
        <ul className="w-full space-y-2">
          {["label", "label", "label", "label"].map((label, index) => (
            <li
              key={index}
              className="w-full h-[30px] flex items-center justify-between rounded-md bg-gray-100 hover:bg-gray-200 px-3"
            >
              <span className="text-gray-700">{label}</span>
              <input
                className="text-blue-500 focus:ring-blue-500 rounded"
                type="checkbox"
                defaultChecked
              />
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button className="border border-gray-300 bg-white text-gray-700 w-[150px] h-[40px] rounded-md shadow-sm hover:bg-gray-100">
            Clear
          </button>
          <button className="border border-transparent bg-blue-500 text-white w-[150px] h-[40px] rounded-md shadow-sm hover:bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
