import React from "react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Sign Up</h3>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex space-x-2 mt-1">
            <select className="w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="0">VN</option>
              <option value="1">US</option>
            </select>
            <input
              type="text"
              placeholder="+84 1234567890"
              className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            placeholder="Tell us a little about the project"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skills
          </label>
          <ul className="mt-1 grid grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-center space-x-2">
              <input type="checkbox" /> <span>HTML</span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" /> <span>Javascript</span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" /> <span>UX Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" /> <span>ReactJS</span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" /> <span>CSS</span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" /> <span>Java</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
