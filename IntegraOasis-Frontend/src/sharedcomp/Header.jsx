import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import axios from "axios";

function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const result = await axios.get(
          `http://localhost:3000/api/user/profile/${userId}`
        );
        setUser(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <header className="bg-[#052747] text-[aliceblue] flex h-[80px] items-center justify-between">
      <nav className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="flex text-[30px] font-['Rage'] ml-3"
          asChild
        >
          <Link className="links" to="/about">
            About us
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="flex text-[30px] font-['Rage'] ml-3"
          asChild
        >
          <Link className="links" to="/contact">
            Contact us
          </Link>
        </Button>
      </nav>
      <img
        src="images/ioh.jpg"
        className="flex items-center justify-center h-[80px] w-[250px] ml-[90px]"
      />
      <nav className="flex items-center justify-between">
        <div class="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 text-['Georgia'] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search.."
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ms-2 text-sm font-medium text-[#052747] bg-white rounded-lg border border-white hover:bg-white"
        >
          <svg
            class="w-4 h-4"
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
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="flex text-[30px] font-['Rage'] mr-3 ml-3"
            >
              Profile
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Profile</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                Name: {user.name}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                Username: {user.username}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                Email: {user.email}
              </div>
              <Button className="bg-[#052747] text-white">
                <Link to="/">Logout</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default Header;
