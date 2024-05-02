import "./Header.css"
import React from "react"

export const Header = () => {

    return (
<header class="flex items-center justify-between px-6 py-4 bg-white border-b border-black dark:bg-gray-950">
  <a class="flex items-center gap-2 ml-20" href="#">
    <img src="./assets/logoPALMO.png" alt="" />
  </a>
  <nav class="flex items-center gap-8 mr-20">
    <a class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
      Home
    </a>
    <a class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
      Services
    </a>
    <a class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
      Projects
    </a>
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-black hover:bg-black hover:text-white">
      Hire Us
    </button>
  </nav>
</header>
  );
}