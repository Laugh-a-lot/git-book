import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { MyCtx } from "../contexts";
import Loader from "../utils/Loader";
type Props = {
    children: React.ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
    const router = useRouter();
    const { state } = useContext(MyCtx);

    useEffect(() => {
        if (!state?.isLoggedIn && router.asPath !== "/log-username") {
            const getUserName = localStorage.getItem("userName");
            const getIsLoggedIn = localStorage.getItem("isLoggedIn");
            if (!getUserName || !getIsLoggedIn) {
                router.push("/log-username");
            }
        }
    }, []);
    if (!state?.isLoggedIn && router.asPath !== "/log-username")
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100vh",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <Loader />
                Loading...
            </div>
        );

    return <>{children}</>;
};

export default PrivateRoute;
