"use client";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logout } from "../features/auth/authSlice";
import { useRouter } from "next/navigation";
import { HEADER, PAGES } from "../Constant";
import ProfileMenu from "./ProfileMenu";
import { useEffect, useState } from "react";

export default function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((store) => store?.auth?.user);
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      router.replace(PAGES.LOGIN_PAGE);
    });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 transition-all duration-500 ${
        showBg ? "bg-black" : "bg-transparent"
      }`}
    >
      <img className="w-40" src={HEADER.NETFLIX_LOGO} alt="logo" />
      {user && (
        <ProfileMenu userIcon={HEADER.USER_ICON} onSignOut={handleSignOut} />
      )}
    </header>
  );
}
