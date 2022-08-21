import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/layoutStyles.module.css";
import Snackbar from "../utils/Snackbar";
import { MyCtx } from "../contexts/index";

type Props = {
    children: React.ReactNode;
};
interface AuthContextInterface {
    userName: string;
    isLoggedIn: boolean;
}

const Layout = ({ children }: Props) => {
    const { state } = useContext(MyCtx);

    return (
        <div className={styles.container}>
            {state?.openSnackbar && <Snackbar />}
            {children}
        </div>
    );
};

export default Layout;
