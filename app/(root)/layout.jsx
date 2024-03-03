// import Navbar from "@/components/shared/navbar/Navbar";
import { Box } from "@mui/material";
import React from "react";
import Home from "../../components/shared/buttonBar/Home";
import Profile from "../../components/shared/buttonBar/profile";
import SendPost from "../../components/shared/buttonBar/SendPost";

const Layout = ({ children }) => {
  return (
    <main className="background-light850_dark100 relative">
      {/* <Navbar /> */}
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-full">{children}</div>
        </section>
      </div>
      <Box display="flex" justifyContent="space-around" width="100%">
        <Box flex={1} textAlign="center">
          <Home />
        </Box>
        <Box flex={1} textAlign="center">
          <Profile />
        </Box>
        <Box flex={1} textAlign="center">
          <SendPost />
        </Box>
      </Box>
    </main>
  );
};

export default Layout;
