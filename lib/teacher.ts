import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

export const isTeacher = () => {
  // const loggedInUserData = useSelector((state: RootState) => state.user.user);

  // if (!loggedInUserData) {
  //   return null; // Show a preloader or loading indicator based on this
  // }

  return true;
};
