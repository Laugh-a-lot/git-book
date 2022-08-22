import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { MyCtx } from "../contexts";
import Loader from "../utils/Loader";
import Fetcher from "../utils/Fetcher";

type Props = {
    children: React.ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
    const router = useRouter();
    const { state, loginUser, showSnackbar } = useContext(MyCtx);

    useEffect(() => {
        async function verfiyAuthentication() {
            if (!state?.isLoggedIn && router.asPath !== "/log-username") {
                const getUserName = localStorage.getItem("userName");
                if (!getUserName) {
                    router.push("/log-username");
                } else {
                    const { status } = await Fetcher(`users/${getUserName}`);
                    if (status === 200) {
                        await loginUser(getUserName);
                        await router.push(`/user/${getUserName}`);
                    } else {
                        router.push("/log-username");
                    }
                }
            }
        }
        verfiyAuthentication();
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
