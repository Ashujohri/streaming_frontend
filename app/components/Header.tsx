"use client";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logout } from "../features/auth/authSlice";
import { useRouter } from "next/navigation";
import { HEADER, PAGES } from "../Constant";
import ProfileMenu from "./ProfileMenu";
import { useEffect, useRef, useState } from "react";
import { Bell, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((store) => store?.auth?.user);
  const [showBg, setShowBg] = useState(false);
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme } = useTheme();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

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
      router.replace(PAGES?.LOGIN_PAGE);
    });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        user && "backdrop-blur-md"
      } ${showBg ? "bg-black" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 py-1">
        <div className="flex items-center gap-10">
          <img className="w-40" src={HEADER?.NETFLIX_LOGO} alt="logo" />
          {user && (
            <nav className="hidden md:flex gap-6 text-sm text-gray-300">
              {HEADER?.NAV_LINKS?.map((item) => (
                <span
                  key={item.label}
                  className="cursor-pointer hover:text-white transition"
                  onClick={() => router.push(item.path)}
                >
                  {item.label}
                </span>
              ))}
            </nav>
          )}
        </div>

        {/* Profile Menu Section */}
        {user && (
          <div className="flex items-center gap-6 text-white">
            <Search className="cursor-pointer hover:scale-110 hover:text-gray-300 transition duration-200" />
            <Bell className="cursor-pointer hover:scale-110 hover:text-gray-300 transition duration-200" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ProfileMenu
                userIcon={HEADER?.USER_ICON}
                onSignOut={handleSignOut}
                open={open}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
