
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../Provider/ThemeProvider";

const MainLayout = () => {
  const { darkMode } = useContext(ThemeContext); // Access the dark mode state

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
