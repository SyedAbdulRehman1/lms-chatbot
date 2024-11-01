"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store/store";
import { getSession } from "next-auth/react";
import { setLoading, setLoggedInUserData } from "./store/userSlice";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { AuthContext } from "@/context/AutxContext";
import axios from "axios";

// Custom component to fetch user data
export const FetchUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch(setLoading(true));
      const session = await getSession();
      if (session?.user) {
        dispatch(setLoggedInUserData(session.user));
        localStorage.setItem("user", JSON.stringify(session.user)); // Storing the entire user object
      }
      dispatch(setLoading(false));
    };

    fetchUserData();
  }, [dispatch]);
  useEffect(() => {
    axios
      .get("/api/initTeacherUser")
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Failed to initialize teacher user:", error);
      });
  }, []);
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
