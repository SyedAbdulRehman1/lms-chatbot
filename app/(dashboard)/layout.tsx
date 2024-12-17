"use client";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import "../../css/style.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AuthContext } from "@/context/AutxContext";
import FetchUserData from "@/components/FetchUserData";
// import { FetchUserData } from "../layout";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Provider store={store}>
    //   <FetchUserData />

    // <AuthContext>
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
    //   </AuthContext>
    // </Provider>
  );
};

export default DashboardLayout;

// "use client";
// import { Navbar } from "./_components/navbar";
// // import { Sidebar } from "./_components/sidebar";
// import "../../css/style.css";
// import { Provider } from "react-redux";
// import { store } from "../store/store";
// import { AuthContext } from "@/context/AutxContext";
// import FetchUserData from "@/components/FetchUserData";
// import Drawer from "@/components/ui/Drawer";
// import { SetStateAction, useState } from "react";
// import Sidebar from "./_components/sidebar";
// import Sidebar1 from "./_components/sidebar";
// // import { FetchUserData } from "../layout";
// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     // <Provider store={store}>
//     //   <FetchUserData />

//     // <AuthContext>
//     // <div className="h-full">
//     //   <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
//     //     <Drawer />

//     //     <Navbar />
//     //   </div>
//     //   <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
//     //     <Sidebar />
//     //   </div>
//     //   <main className="md:pl-56 pt-[80px] h-full">{children}</main>
//     // </div>
//     <div className="h-full flex">
//       {/* Sidebar */}
//       <div
//         className={`hidden md:flex h-full fixed inset-y-0 z-50 transition-all duration-300
//       ${isCollapsed ? "w-16" : "w-56"} bg-gray-800`}
//       >
//         <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 h-full">
//         <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 flex items-center">
//           {/* <Drawer /> */}
//           <Navbar />

//           <button
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="ml-auto mr-4 p-2 text-white bg-gray-700 rounded-md"
//           >
//             {isCollapsed ? "→" : "←"}
//           </button>
//         </div>

//         <main
//           className={`pt-[80px] h-full transition-all duration-300 ${
//             isCollapsed ? "md:pl-16" : "md:pl-56"
//           }`}
//         >
//           {children}
//         </main>
//       </div>
//     </div>

//     //   </AuthContext>
//     // </Provider>
//   );
// };

// export default DashboardLayout;
