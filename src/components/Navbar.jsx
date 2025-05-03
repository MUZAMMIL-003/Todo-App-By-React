import React from "react";

function Navbar({ handleTheme }) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvedP5ZPv27C6WR2iZTY2A8n3sVRtVpfvyWqDpFf-RSa0oLmVLAk-BCbFbPuDrCm04GY&usqp=CAU"
            alt="Logo"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="ml-3 text-xl">TODO-React</span>
          
        </span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
        </nav>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleTheme}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
        </label>
      </div>
    </header>
  );
}

export default Navbar;
