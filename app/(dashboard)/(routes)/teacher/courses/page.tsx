"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { DataTable } from "./_components/data-table";
import useCourses from "./useCourses";
import { columns } from "./_components/columns";

const CoursesPage = () => {
  const loggedInUserData = useSelector((state: RootState) => state.user.user);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    if (loggedInUserData) {
      setIsLoadingUser(false);
    }
  }, [loggedInUserData]);

  const userId = loggedInUserData?.id;
  const { courses, loading, error } = useCourses();
  // Handle loading states
  if (isLoadingUser) return <div>Loading user data...</div>;
  if (loading) return <div>Loading courses...</div>;

  // Redirect if no user ID is found
  if (!userId) {
    redirect("/");
    return null; // Ensure to return null after redirecting
  }

  // Handle errors if necessary
  // if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
