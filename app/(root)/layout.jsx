// import Navbar from "@/components/shared/navbar/Navbar";
import { Box } from "@mui/material";
import React from "react";
import Home from "../../components/shared/buttonBar/Home";
import Profile from "../../components/shared/buttonBar/profile";
import SendPost from "../../components/shared/buttonBar/SendPost";
import Divider from "@mui/material/Divider";

const Layout = ({ children }) => {
  return (
    <main className="relative background-light850_dark100">
      {/* <Navbar /> */}
      <div className="flex">
        <section className="flex flex-col flex-1 min-h-screen px-6 pb-6 pt-14 max-md:pb-14 sm:px-14">
          <div className="w-full max-w-full mx-auto">{children}</div>
        </section>
      </div>
      <Divider />

      <Box display="flex" justifyContent="space-around" width="100%">
        <Box flex={1} textAlign="center">
          <Home />
        </Box>
        <Box flex={1} textAlign="center">
          <SendPost />
        </Box>
        <Box flex={1} textAlign="center">
          <Profile />
        </Box>
      </Box>
    </main>
  );
};

export default Layout;
