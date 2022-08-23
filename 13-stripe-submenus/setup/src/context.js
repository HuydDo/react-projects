import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

// const AppProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
//   const [page, setPage] = useState({ page: '', links: [] });
//   const [location, setLocation] = useState({});
//   const openSidebar = () => {
//     setIsSidebarOpen(true);
//   };
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };
//   const openSubmenu = (text, coordinates) => {
//     const page = sublinks.find((link) => link.page === text);
//     setPage(page);
//     setLocation(coordinates);
//     setIsSubmenuOpen(true);
//   };
//   const closeSubmenu = () => {
//     setIsSubmenuOpen(false);
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         isSidebarOpen,
//         openSidebar,
//         closeSidebar,
//         isSubmenuOpen,
//         openSubmenu,
//         closeSubmenu,
//         page,
//         location,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
// // make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };
