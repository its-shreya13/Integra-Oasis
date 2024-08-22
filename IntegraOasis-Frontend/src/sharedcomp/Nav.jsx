import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-[#052747] border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full grid-cols-5 font-medium flex items-center justify-center">
        <Button
          variant="ghost"
          className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
        >
          <Link to="/buy">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
                />
              </svg>
              <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                Buy
              </span>
            </div>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
        >
          <Link to="#">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                />
              </svg>
              <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                Learn
              </span>
            </div>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
        >
          <Link to="/in">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                Home
              </span>
            </div>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
        >
          <Link to="/resell">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
              <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                Resell
              </span>
            </div>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="inline-flex flex-col items justify-center px-5 hover:bg-gray group"
        >
          <Link to="/cart">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="flex w-5 h-5 mb-2 text-white dark:text-white group-hover:text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <span className="flex text-sm text-white dark:text-white group-hover:text-gray-500 ">
                Cart
              </span>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Nav;
