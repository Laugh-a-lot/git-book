import React, { useEffect, useState } from "react";
import { AuthCtx } from "../contexts";

type Props = {
    children: React.ReactNode;
};
interface AuthContextInterface {
    userName: string;
    isLoggedIn: boolean;
}

const Layout = ({ children }: Props) => {
    const [userName, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const getUserName = localStorage.getItem("userName");
        const getIsLoggedIn = localStorage.getItem("isLoggedIn");
        setUserName(getUserName ? getUserName : "");
        setIsLoggedIn(getIsLoggedIn === "true");
    }, []);
    return (
        <AuthCtx.Provider value={{ userName, isLoggedIn }}>
            <div>
                Layout
                {children}
            </div>
        </AuthCtx.Provider>
    );
};

export default Layout;
