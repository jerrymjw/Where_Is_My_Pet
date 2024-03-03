import React from "react";

const Layout = ({ children }) => {
    return (
        <main className="bg-white h-screen p-8">
            {children}
        </main>
    );
};

export default Layout;
