"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useAppDispatch } from "@/lib/hooks";
import { setUser, logout } from "./features/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { PAGES } from "./Constant";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
          })
        );

        if (pathName === PAGES.DEFAULT_PAGE || pathName === PAGES.LOGIN_PAGE) {
          router.replace(PAGES.BROWSE_PAGE);
        }
      } else {
        dispatch(logout());

        if (pathName.startsWith(PAGES.BROWSE_PAGE)) {
          router.replace(PAGES.LOGIN_PAGE);
        }
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [pathName, router, dispatch]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
        <p className="text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    );

  return <>{children}</>;
}
