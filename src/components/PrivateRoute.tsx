import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { MyCtx } from "../contexts";
import Loader from "./Loader";

type Props = {
    children: React.ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
    const [userName, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const { state} = useContext(MyCtx);

    useEffect(() => {
        if (!state?.isLoggedIn && router.asPath !== "/log-username") {
            const getUserName = localStorage.getItem("userName");
            const getIsLoggedIn = localStorage.getItem("isLoggedIn");
            setUserName(getUserName ? getUserName : "");
            setIsLoggedIn(getIsLoggedIn === "true");
            if (!getUserName || !getIsLoggedIn) {
                router.push("/log-username");
            }
        }
    }, []);
    if (!state?.isLoggedIn && router.asPath !== "/log-username") return <Loader />;
    return <>{children}</>;
};

export default PrivateRoute;
