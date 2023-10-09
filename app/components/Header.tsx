"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import Logo from "@/public/logo.png";
import ProfilePhoto from "@/public/profile.webp";

const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <header className="bg-white">
      <div className="flex justify-between items-center h-14 max-w-screen-xl px-4 m-auto">
        <Link href="/">
          <Image src={Logo} alt="logo" width={50} height={40} />
        </Link>

        <div className="relative grow max-w-[420px] mx-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="w-full text-[#171717] outline-0 border-[1.5px] border-[#d4d4d4] rounded-md py-[6px] px-2"
          />

          <span className="flex items-center justify-between absolute right-0 top-0 h-full text-[#171717] hover:text-[#2f3ab2] hover:bg-[#3b49df1a] rounded-md px-2">
            <FiSearch className="m-auto h-6 w-6" />
          </span>
        </div>

        <div className="flex items-center ml-auto">
          <Link
            href="/new"
            className="font-medium hover:bg-[#3b49df] text-[#3b49df] hover:text-white rounded-md border border-[#3b49df] py-[7px] px-[15px] mr-4"
          >
            Create Post
          </Link>

          <div className="relative">
            {/* PROFILE BUTTON */}
            <button
              onClick={() => setDropdownActive((prev) => !prev)}
              className="bg-[#e5e5e5] p-[0.25rem] rounded-full"
            >
              <Image
                src={ProfilePhoto}
                alt="profile image"
                className="rounded-full w-8 h-8"
              />
            </button>

            {/* PROFILE DROPDOWN */}
            <div
              style={{ display: dropdownActive ? "block" : "none" }}
              className="absolute right-0 mt-1 text-[#404040] bg-white rounded-md shadow-sm border border-[#d4d4d4] min-w-[250px] p-2"
            >
              <Link href="/profile" className="profile-dropdown-link">
                <span className="block font-medium whitespace-nowrap">
                  Idris Abdul-Lateef
                </span>
                <small className="block text-sm opacity-75">@eedris</small>
              </Link>
              <hr className="my-2" />
              <Link href="/new" className="profile-dropdown-link">
                Create Post
              </Link>
              <hr className="my-2" />
              <Link href="/signout" className="profile-dropdown-link">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
