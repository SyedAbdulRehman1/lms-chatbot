"use client";
import { clearUserData } from "@/app/store/userSlice";
import { type ClassValue, clsx } from "clsx"
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export  function LogoutUser() {
  const dispatch = useDispatch();
    // dispatch(clearUserData());
    // localStorage.removeItem("user");
    // signOut({ callbackUrl: "/" });/
  const handleLogout = () => {
    dispatch(clearUserData());
    localStorage.removeItem("user");
    signOut({ callbackUrl: "/" });
  };

  return handleLogout; // Return the function to be called externally

}