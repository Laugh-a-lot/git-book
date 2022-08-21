import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { MyCtx } from "../contexts";
import Loader from "./Loader";

type Props = {
    children: React.ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
    const router = useRouter();
    const { state} = useContext(MyCtx);

    useEffect(() => {
        if (!state?.isLoggedIn && router.asPath !== "/log-username") {
            const getUserName = localStorage.getItem("userName");
            const getIsLoggedIn = localStorage.getItem("isLoggedIn");
            if (!getUserName || !getIsLoggedIn) {
                router.push("/log-username");
            }
        }
    }, []);
    console.log(state);
    if (!state?.isLoggedIn && router.asPath !== "/log-username") return <Loader />;
    return <>{children}</>;
};

export default PrivateRoute;
