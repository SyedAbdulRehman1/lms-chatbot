"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import { Provider, useDispatch } from "react-redux";
import { RootState, store } from "./store/store";
import { getSession } from "next-auth/react";
import { setLoading, setLoggedInUserData } from "./store/userSlice";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { AuthContext } from "@/context/AutxContext";

// Custom component to fetch user data
const FetchUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch(setLoading(true));
      const session = await getSession();
      if (session?.user) {
        dispatch(setLoggedInUserData(session.user));
      }
      dispatch(setLoading(false));
    };

    fetchUserData();
  }, [dispatch]);

  return null;
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <FetchUserData />
          <ConfettiProvider />
          <AuthContext>
            <ToastProvider />
            {children}
          </AuthContext>
        </Provider>
      </body>
    </html>
  );
}
