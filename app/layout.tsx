"use client";
import { Suspense, useEffect } from "react";
import { Inter } from "next/font/google";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store/store";
import { getSession } from "next-auth/react";
import { setLoading, setLoggedInUserData } from "./store/userSlice";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { AuthContext } from "@/context/AutxContext";
import axios from "axios";
import FetchUserData from "@/components/FetchUserData";
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "../css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/navbar";
// Custom component to fetch user data
// export  function  FetchUserData(){
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       dispatch(setLoading(true));
//       const session = await getSession();
//       if (session?.user) {
//         dispatch(setLoggedInUserData(session.user));
//         localStorage.setItem("user", JSON.stringify(session.user)); // Storing the entire user object
//       }
//       dispatch(setLoading(false));
//     };

//     fetchUserData();
//   }, [dispatch]);
//   useEffect(() => {
//     axios
//       .get("/api/initTeacherUser")
//       .then((response) => {
//         console.log(response.data.message);
//       })
//       .catch((error) => {
//         console.error("Failed to initialize teacher user:", error);
//       });
//   }, []);
//   return <></>;
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" />

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"  />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
    {/* <link href="css/style.css" rel="stylesheet"> */}


        <Provider store={store}>
        <Suspense fallback={null}>

          <FetchUserData />
          <ConfettiProvider />
          <AuthContext>
            <ToastProvider />
            <Navbar />
            {children}
          </AuthContext>
          </Suspense>

        </Provider>

      </body>
    </html>
  );
}
